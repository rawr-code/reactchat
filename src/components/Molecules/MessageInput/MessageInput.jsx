import React, { useState, useEffect } from 'react';

const MessageInput = ({ sendMessage, sendTyping }) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const lastUpdateTime = Date.now();

  let typingInterval = null;

  const startCheckingTyping = () => {
    console.log('typing');
    typingInterval = setInterval(() => {
      if (Date.now() - lastUpdateTime > 300) {
        setIsTyping(false);
        stopCheckingTyping();
      }
    }, 300);
  };

  const stopCheckingTyping = () => {
    console.log('stop typing', typingInterval);
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
    console.log('init');
    return () => {
      console.log('end');
      stopCheckingTyping();
    };
  }, []);

  return (
    <div>
      <p>MessageInput</p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          value={message}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        />
        <button disabled={message.length < 1} type="submit">
          enviar
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
