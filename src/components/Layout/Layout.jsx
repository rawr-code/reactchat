import React from 'react';

// Components
import SideBar from './SideBar';

const Layout = ({ user, handleLogout, children }) => {
  return (
    <main>
      <h1>Layout</h1>
      <SideBar user={user} logout={handleLogout} />
      {children}
    </main>
  );
};

export default Layout;
