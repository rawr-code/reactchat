import React from 'react';

const SideBar = ({ user, logout }) => {
  return (
    <div>
      <h2>SideBar</h2>
      <button onClick={logout}>Salir</button>
    </div>
  );
};

export default SideBar;
