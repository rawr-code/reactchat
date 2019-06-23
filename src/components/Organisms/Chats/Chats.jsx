import React, { useState } from 'react';

const Chats = ({ chats, activeChat, setActiveChat, onSendPrivateMessage }) => {
  const [reciever, setReciever] = useState('');
  console.log('chats', chats);
  console.log('activeChat', activeChat);

  let handleClick = null;

  const handleSubmit = e => {
    e.preventDefault();
    console.log('reciever', reciever);
    onSendPrivateMessage(reciever);
    setReciever('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setReciever(value);
  };

  return (
    <div>
      <h2>Chats</h2>
      <div>
        <p>new chat</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            placeholder="Search"
            type="text"
            value={reciever}
            onChange={handleChange}
          />
          <button type="submit">crear</button>
        </form>
      </div>
      <div>
        {chats.map(chat => {
          if (activeChat) {
            if (activeChat.id !== chat.id) {
              handleClick = () => setActiveChat(chat);
            }
          } else {
            handleClick = () => setActiveChat(chat);
          }
          return (
            <div key={chat.id} onClick={handleClick}>
              <p>{chat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
