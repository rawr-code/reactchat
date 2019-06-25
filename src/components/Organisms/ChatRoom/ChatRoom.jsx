import React, { useEffect } from 'react';
import styles from './ChatRoom.module.scss';

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
  const elementRef = React.createRef();

  const scrollToBottom = () => {
    elementRef.current.scrollTop = elementRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h2 className={styles.roomName}>{name}</h2>
      </header>
      <div className={styles.messagesContainer} ref={elementRef}>
        {messages.map(message => {
          let right = false;
          let sender = message.sender;

          if (user.name === message.sender) {
            right = true;
          }

          if (user.name === message.sender) {
            sender = '';
          }

          return (
            <Message
              key={message.id}
              message={message.message}
              sender={sender}
              time={message.time}
              right={right}
            />
          );
        })}
      </div>
      <div className={styles.typing}>
        {typingUsers.map(name => (
          <span key={name}>{name} esta escribiendo...</span>
        ))}
      </div>
      <MessageInput sendMessage={sendMessage} sendTyping={sendTyping} />
    </div>
  );
};

export default ChatRoom;
