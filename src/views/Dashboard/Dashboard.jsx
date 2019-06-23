import React, { Component } from 'react';

// Events
import {
  MESSAGE_RECIEVED,
  MESSAGE_SENT,
  TYPING,
  COMMUNITY_CHAT,
  PRIVATE_MESSAGE
} from '../../events';

// Organisms
import { Chats, ChatRoom } from '../../components/Organisms';

class Dashboard extends Component {
  state = {
    chats: [],
    activeChat: null
  };

  componentDidMount() {
    const { socket } = this.props;
    this.initSocket(socket);
  }

  initSocket = socket => {
    const { user } = this.props;
    socket.emit(COMMUNITY_CHAT, this.resetChat);
    socket.on(PRIVATE_MESSAGE, this.addChat);
    socket.on('connect', () => {
      socket.emit(COMMUNITY_CHAT, this.resetChat);
    });
    socket.emit(PRIVATE_MESSAGE, { reciever: 'Emma', sender: user.name });
  };

  sendOpenPrivateMessage = reciever => {
    const { socket, user } = this.props;
    const { activeChat } = this.state;
    socket.emit(PRIVATE_MESSAGE, { reciever, sender: user.name, activeChat });
  };

  updateTypingInChat = chatId => {
    return ({ isTyping, user }) => {
      if (user !== this.props.user.name) {
        const { chats } = this.state;

        let newChats = chats.map(chat => {
          if (chat.id === chatId) {
            if (isTyping && !chat.typingUsers.includes(user)) {
              chat.typingUsers.push(user);
            } else if (!isTyping && chat.typingUsers.includes(user)) {
              chat.typingUsers = chat.typingUsers.filter(u => u !== user);
            }
          }
          return chat;
        });
        this.setState({ chats: newChats });
      }
    };
  };

  addMessageToChat = chatId => {
    return message => {
      const { chats } = this.state;
      let newChats = chats.map(chat => {
        if (chat.id === chatId) chat.messages.push(message);
        return chat;
      });

      this.setState({ chats: newChats });
    };
  };

  addChat = (chat, reset = false) => {
    const { socket } = this.props;
    const { chats } = this.state;

    const newChats = reset ? [chat] : [...chats, chat];
    this.setState({
      chats: newChats
      // activeChat: reset ? chat : this.state.activeChat
    });

    const messageEvent = `${MESSAGE_RECIEVED}-${chat.id}`;
    const typingEvent = `${TYPING}-${chat.id}`;

    socket.on(typingEvent, this.updateTypingInChat(chat.id));
    socket.on(messageEvent, this.addMessageToChat(chat.id));
  };

  resetChat = chat => {
    return this.addChat(chat, true);
  };

  sendMessage = (chatId, message) => {
    const { socket } = this.props;
    socket.emit(MESSAGE_SENT, { chatId, message });
  };

  sendTyping = (chatId, isTyping) => {
    const { socket } = this.props;
    socket.emit(TYPING, { chatId, isTyping });
  };

  setActiveChat = activeChat => {
    this.setState({ activeChat });
  };

  render() {
    const { user } = this.props;
    const { chats, activeChat } = this.state;
    let chatRoom = null;

    if (activeChat !== null) {
      chatRoom = (
        <ChatRoom
          name={activeChat.name}
          user={user}
          messages={activeChat.messages}
          typingUsers={activeChat.typingUsers}
          sendMessage={message => this.sendMessage(activeChat.id, message)}
          sendTyping={isTyping => this.sendTyping(activeChat.id, isTyping)}
        />
      );
    } else {
      chatRoom = (
        <div>
          <h3>Choose a chat!</h3>
        </div>
      );
    }

    return (
      <div>
        <p>Dashboard</p>
        <Chats
          chats={chats}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat}
          onSendPrivateMessage={this.sendOpenPrivateMessage}
        />
        {chatRoom}
      </div>
    );
  }
}

export default Dashboard;
