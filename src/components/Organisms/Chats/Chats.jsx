import React, { useState } from 'react';
import styles from './Chats.module.scss';

// Atoms
import { Avatar } from '../../Atoms';

const Chats = ({ data, activeChat, setActiveChat, onSendPrivateMessage }) => {
  const [reciever, setReciever] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSendPrivateMessage(reciever);
    setReciever('');
  };

  const handleChange = e => {
    const { value } = e.target;
    setReciever(value);
  };

  return (
    <div className={styles.root}>
      {/* <div className={styles.searchWrapper}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            placeholder="Search"
            type="text"
            value={reciever}
            onChange={handleChange}
          />
          <button type="submit">crear</button>
        </form>
      </div> */}

      <div>
        {data.map(item => {
          const { messages } = item;
          let handleClick = null;
          let description = '';
          let classNames = styles.item;

          if (messages) {
            const lastMessage = messages.slice(-1)[0];
            if (lastMessage) {
              description = lastMessage.message;
            }
          }

          if (activeChat) {
            if (activeChat.id !== item.id) {
              handleClick = () => setActiveChat(item);
            } else {
              classNames = `${styles.item} ${styles.itemSelected}`;
            }
          } else {
            handleClick = () => setActiveChat(item);
          }

          return (
            <div key={item.id} onClick={handleClick} className={classNames}>
              <Avatar />
              <div className={styles.itemInfo}>
                <span className={styles.itemInfoTitle}>{item.name}</span>
                <span className={styles.itemInfoSubtitle}>{description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
