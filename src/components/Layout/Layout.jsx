import React from 'react';
import styles from './Layout.module.scss';

// Components
import SideBar from './SideBar';

const Layout = ({ user, handleLogout, children }) => {
  return (
    <main className={styles.main}>
      <SideBar user={user} logout={handleLogout} />
      {children}
    </main>
  );
};

export default Layout;
