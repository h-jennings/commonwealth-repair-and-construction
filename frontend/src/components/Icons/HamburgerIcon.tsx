import React from 'react';
import styles from './Icons.module.scss';

export const HamburgerIcon = () => {
  return (
    <div
      className={styles.container}
      style={{
        paddingTop: `${(14 / 24) * 100}%`,
      }}>
      <svg
        className={styles.icon}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 14'>
        <rect width='24' height='2' y='12' />
        <rect width='20' height='2' x='4' y='6' />
        <rect width='24' height='2' />
      </svg>
    </div>
  );
};
