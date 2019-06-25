import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Events
import {
  MESSAGE_RECIEVED,
  MESSAGE_SENT,
  TYPING,
  COMMUNITY_CHAT,
  PRIVATE_MESSAGE,
  USER_CONNECTED,
  USER_DISCONNECTED
} from '../../events';

// Organisms
import { Chats, ChatRoom } from '../../components/Organisms';

class Dashboard extends Component {
  state = {
    chats: [],
    activeChat: null,
    users: []
  };

  componentDidMount() {
    const { socket } = this.props;
    this.initSocket(socket);
  }

  componentWillMount() {
    const { socket } = this.props;
    socket.off(PRIVATE_MESSAGE);
    socket.off(USER_CONNECTED);
    socket.off(USER_DISCONNECTED);
  }

  initSocket = socket => {
    const { user } = this.props;
    socket.emit(COMMUNITY_CHAT, this.resetChat);
    socket.on(PRIVATE_MESSAGE, this.addChat);
    socket.on('connect', () => {
      socket.emit(COMMUNITY_CHAT, this.resetChat);
    });
    socket.emit(PRIVATE_MESSAGE, { reciever: 'Emma', sender: user.name });
    socket.on(USER_CONNECTED, users => {
      const newUsers = Object.values(users).filter(u => u.id !== user.id);
      this.setState({ users: newUsers });
    });
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
    const { chats, activeChat, users } = this.state;
    let ChatRoomComponent = null;

    if (activeChat !== null) {
      ChatRoomComponent = () => (
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
      ChatRoomComponent = () => (
        <div>
          <h3>Escoge un chat!</h3>
        </div>
      );
    }

    return (
      <Switch>
        <Route
          path="/chats"
          render={props => (
            <>
              <Chats
                {...props}
                title="Chats"
                data={chats}
                activeChat={activeChat}
                setActiveChat={this.setActiveChat}
                onSendPrivateMessage={this.sendOpenPrivateMessage}
              />
              <ChatRoomComponent />
            </>
          )}
        />
        <Route
          path="/users"
          render={props => (
            <>
              <Chats
                {...props}
                title="Users"
                data={users}
                activeChat={activeChat}
                setActiveChat={this.setActiveChat}
                onSendPrivateMessage={this.sendOpenPrivateMessage}
              />
              <ChatRoomComponent />
            </>
          )}
        />
        <Route component={ChatRoomComponent} />

        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Dashboard;
