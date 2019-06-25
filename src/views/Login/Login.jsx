import React, { useState } from 'react';
import styles from './Login.module.scss';

// Events
import { VERIFY_USER } from '../../events';

const LoginView = ({ socket, handleUser }) => {
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const handleNickname = ({ user, isUser }) => {
    if (isUser) {
      setNicknameError('User name taken');
    } else {
      handleUser(user);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    socket.emit(VERIFY_USER, nickname, handleNickname);
  };

  const handleChange = e => {
    const { value } = e.target;
    setNickname(value);
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>¿Como te llamas?</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className={styles.inputWrapper}>
          <input type="text" onChange={handleChange} className={styles.input} />
          <button
            type="submit"
            disabled={nickname.length < 1}
            className={styles.button}>
            Entrar
          </button>
        </div>
        <p className={styles.error}>{nicknameError}</p>
      </form>
    </div>
  );
};

export default LoginView;
