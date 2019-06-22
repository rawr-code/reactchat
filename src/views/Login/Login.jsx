import React, { useState } from 'react';

// Events
import { VERIFY_USER } from '../../events';

const LoginView = ({ socket, handleUser }) => {
  const [nickname, setNickname] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const handleNickname = ({ user, isUser }) => {
    console.log(user, isUser);
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
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" onChange={handleChange} />
        <button type="submit">Enviar</button>
        <p>{nicknameError}</p>
      </form>
    </div>
  );
};

export default LoginView;
