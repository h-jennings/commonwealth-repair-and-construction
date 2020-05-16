import React from 'react';
import classnames from 'classnames';
import styles from './MobileMenu.module.scss';
import { HamburgerIcon } from '@/components/Icons/HamburgerIcon';

export const MobileMenu = () => {
  return (
    <button className={classnames([styles.menuButton])}>
      <HamburgerIcon />
    </button>
  );
};
