import React from 'react';
import classnames from 'classnames';
/* import styles from './Footer.module.scss'; */

export const Footer = () => {
  return (
    <footer className={classnames(['bg-black', 'c-p-08'])}>
      <div className={classnames(['border-t-white', 'text-white'])}>
        This is a the footer
      </div>
    </footer>
  );
};
