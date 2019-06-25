import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

// Icons
import { FaUserFriends } from 'react-icons/fa';
import { IoIosChatbubbles, IoIosPower } from 'react-icons/io';

// Atoms
import { Avatar } from '../../Atoms';

const SideBar = ({ user, logout }) => {
  return (
    <nav className={styles.root}>
      <div className={styles.logo}>
        <Avatar />
      </div>
      <div className={styles.iconLinkWrapper}>
        <NavLink
          to="/chats"
          className={styles.iconLink}
          activeClassName={styles.iconLinkSelected}>
          <IoIosChatbubbles />
        </NavLink>
        <NavLink
          to="/users"
          className={styles.iconLink}
          activeClassName={styles.iconLinkSelected}>
          <FaUserFriends />
        </NavLink>
      </div>
      <div className={styles.iconLink} onClick={logout}>
        <IoIosPower />
      </div>
    </nav>
  );
};

export default SideBar;
