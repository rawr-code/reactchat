const io = require('./index').io;

const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../events');

const { createUSer, createMessage, createChat } = require('../factories');

let connectedUsers = {};

module.exports = function(socket) {
  console.log('Socket Id' + socket.id);

  // Verify user
  socket.on(VERIFY_USER, (nickname, cb) => {
    if (isUser(connectedUsers, nickname)) {
      cb({ isUser: true, user: null });
    } else {
      cb({ isUser: false, user: createUSer({ name: nickname }) });
    }
  });

  // User connects with username
  socket.on(USER_CONNECTED, user => {
    connectedUsers = addUser(connectedUsers, user);
    socket.user = user;

    io.emit(USER_CONNECTED, connectedUsers);
    console.log(connectedUsers);
  });
};

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
