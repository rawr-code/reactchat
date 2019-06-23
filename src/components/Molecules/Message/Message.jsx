import React from 'react';

const Message = ({ time, message, sender }) => {
  return (
    <div>
      <p>Message</p>
      <div>{time}</div>
      <div>{message}</div>
      <div>{sender}</div>
    </div>
  );
};

export default Message;
