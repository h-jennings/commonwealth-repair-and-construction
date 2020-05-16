import React from 'react';
import classnames from 'classnames';
import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
  return (
    <div className={classnames([styles.menuButtonWrapper])}>
      <button className={classnames([styles.menuButton])}>
        <svg
          className={styles.svgIcon}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 14'>
          <rect width='24' height='2' y='12' />
          <rect width='20' height='2' x='4' y='6' />
          <rect width='24' height='2' />
        </svg>
      </button>
    </div>
  );
};
