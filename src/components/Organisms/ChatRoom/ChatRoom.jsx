import React from 'react';

// Molecules
import { Message, MessageInput } from '../../Molecules';

const ChatRoom = ({
  name,
  user,
  messages = [],
  typingUsers = [],
  sendMessage,
  sendTyping
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        {messages.map(message => (
          <Message key={message.id} message={message.message} />
        ))}
        {typingUsers.map(name => (
          <div key={name}>{name} is typing...</div>
        ))}
      </div>
      <MessageInput sendMessage={sendMessage} sendTyping={sendTyping} />
    </div>
  );
};

export default ChatRoom;
