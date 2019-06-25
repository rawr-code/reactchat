import React from 'react';
import styles from './Avatar.module.scss';

import logo from '../../../images/logo.svg';

const Avatar = ({ img = logo }) => {
  return (
    <div className={styles.root}>
      <img src={img} alt="avatar" className={styles.avatar} />
    </div>
  );
};

export default Avatar;
