import React, { useReducer } from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import { HamburgerIcon } from '@/components/Icons/HamburgerIcon';
import { mobileMenuReducer } from './mobile-menu-reducer';

const mobileMenuContainerVariants = {
  opened: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const mobileMenuChildVariants = {
  opened: {
    opacity: 1,
    x: '0%',
  },
  closed: {
    opacity: 0,
    x: '100%',
  },
};

export const MobileMenu = () => {
  const [state, send] = useReducer(mobileMenuReducer, {
    menuState: 'closed',
  });

  const handleLinkClick = () => {
    send({ type: 'CLOSE' });
  };

  return (
    <>
      <button
        className={classnames([styles.menuButton])}
        onClick={() => send({ type: 'TOGGLE' })}>
        <HamburgerIcon />
      </button>
      <motion.ul
        className={classnames([
          'd-flex',
          'direction-column',
          'items-end',
          styles.mobileMenuList,
        ])}
        animate={state.menuState}
        variants={mobileMenuContainerVariants}
        initial='closed'
        data-state={state.menuState}>
        <motion.li
          onClick={() => handleLinkClick()}
          variants={mobileMenuChildVariants}
          className={styles.mobileMenuItem}>
          services
        </motion.li>
        <motion.li
          onClick={() => handleLinkClick()}
          variants={mobileMenuChildVariants}
          className={styles.mobileMenuItem}>
          team
        </motion.li>
        <motion.li
          onClick={() => handleLinkClick()}
          variants={mobileMenuChildVariants}
          className={styles.mobileMenuItem}>
          contact
        </motion.li>
      </motion.ul>
    </>
  );
};
