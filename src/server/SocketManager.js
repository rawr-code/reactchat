const io = require('./index').io;

const {
  VERIFY_USER,
  USER_CONNECTED,
  USER_DISCONNECTED,
  LOGOUT,
  COMMUNITY_CHAT,
  MESSAGE_RECIEVED,
  MESSAGE_SENT,
  TYPING,
  PRIVATE_MESSAGE
} = require('../events');

const { createUSer, createMessage, createChat } = require('../factories');

let connectedUsers = {};

let communityChat = createChat({ isCommunity: true });

module.exports = function(socket) {
  console.log('Socket Id' + socket.id);

  let sendMessageToChatFromUser;
  let sendTypingFromUser;

  // Verify user
  socket.on(VERIFY_USER, (nickname, cb) => {
    if (isUser(connectedUsers, nickname)) {
      cb({ isUser: true, user: null });
    } else {
      cb({
        isUser: false,
        user: createUSer({ name: nickname, socketId: socket.id })
      });
    }
  });

  // User connects with username
  socket.on(USER_CONNECTED, user => {
    user.socketId = socket.id;
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;

    sendMessageToChatFromUser = sendMessageToChat(user.name);
    sendTypingFromUser = sendTypingToChat(user.name);
    io.emit(USER_CONNECTED, connectedUsers);
    console.log(connectedUsers);
  });

  // User disconnects
  socket.on('disconnect', () => {
    if ('user' in socket) {
      connectedUsers = removeUser(connectedUsers, socket.user.name);

      io.emit(USER_DISCONNECTED, connectedUsers);
      console.log('Disconnect', connectedUsers);
    }
  });

  // User Logout
  socket.on(LOGOUT, () => {
    // console.log(socket.user);
    connectedUsers = removeUser(connectedUsers, socket.user.name);

    io.emit(USER_DISCONNECTED, connectedUsers);
    console.log('Disconnect Logout', connectedUsers);
  });

  // Get Community Chat
  socket.on(COMMUNITY_CHAT, cb => {
    cb(communityChat);
  });

  socket.on(MESSAGE_SENT, ({ chatId, message }) => {
    sendMessageToChatFromUser(chatId, message);
  });

  socket.on(TYPING, ({ chatId, isTyping }) => {
    sendTypingFromUser(chatId, isTyping);
  });

  socket.on(PRIVATE_MESSAGE, ({ reciever, sender, activeChat }) => {
    if (reciever in connectedUsers) {
      const recieverSocket = connectedUsers[reciever].socketId;
      if (activeChat === null || activeChat.id === communityChat.id) {
        const newChat = createChat({
          name: `${reciever}&${sender}`,
          users: [reciever, sender]
        });

        socket.to(recieverSocket).emit(PRIVATE_MESSAGE, newChat);
        socket.emit(PRIVATE_MESSAGE, newChat);
      } else {
        socket.to(recieverSocket).emit(PRIVATE_MESSAGE, activeChat);
      }
    }
  });
};

function sendTypingToChat(user) {
  return (chatId, isTyping) => {
    io.emit(`${TYPING}-${chatId}`, { user, isTyping });
  };
}

function sendMessageToChat(sender) {
  return (chatId, message) => {
    io.emit(
      `${MESSAGE_RECIEVED}-${chatId}`,
      createMessage({ message, sender })
    );
  };
}

function addUser(userList, user) {
  let newList = Object.assign({}, userList);
  newList[user.name] = user;
  return newList;
}

function removeUser(userList, username) {
  let newList = Object.assign({}, userList);
  delete newList[username];
  return newList;
}

function isUser(userList, username) {
  return username in userList;
}
