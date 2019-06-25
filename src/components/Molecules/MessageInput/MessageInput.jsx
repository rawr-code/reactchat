import React, { useState, useEffect } from 'react';
import styles from './MessageInput.module.scss';

// Icons
import { IoMdSend } from 'react-icons/io';

const MessageInput = ({ sendMessage, sendTyping }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const lastUpdateTime = Date.now();

  let typingInterval = null;

  const startCheckingTyping = () => {
    typingInterval = setInterval(() => {
      if (Date.now() - lastUpdateTime > 300) {
        setIsTyping(false);
        stopCheckingTyping();
      }
    }, 300);
  };

  const stopCheckingTyping = () => {
    if (typingInterval) {
      clearInterval(typingInterval);
      sendTyping(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      sendTyping(true);
      startCheckingTyping();
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode !== 13) {
      handleTyping();
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    setMessage(value);
  };

  useEffect(() => {
    return () => {
      stopCheckingTyping();
    };
  }, []);

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit} autoComplete="off" className={styles.form}>
        <input
          type="text"
          autoFocus
          value={message}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          className={styles.input}
        />
        <button
          disabled={message.length < 1}
          type="submit"
          className={styles.button}>
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
