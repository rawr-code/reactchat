import React from 'react';
import styles from './Message.module.scss';

const Message = ({ time, message, sender, right = false }) => {
  let classNames = styles.root;

  if (right) {
    classNames = `${styles.root} ${styles.textRight}`;
  }

  return (
    <div className={classNames}>
      <span className={styles.message}>{message}</span>
      <div className={styles.messageDetails}>
        <span className={styles.sender}>{sender}</span>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
};

export default Message;
