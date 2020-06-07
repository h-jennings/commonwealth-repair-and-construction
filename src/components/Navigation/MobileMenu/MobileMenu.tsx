import React, { useReducer, useEffect } from 'react';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import styles from './MobileMenu.module.scss';
import { HamburgerIcon } from '@/components/Icons/HamburgerIcon';
import { mobileMenuReducer } from './mobile-menu-reducer';
import { useMobileScroll } from '@/utils/use-scroll';
import { PhoneIcon } from '@/components/Icons/PhoneIcon';
import { copyToClipboard } from '@/utils/copy-to-clipboard';

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
  const { scrollY } = useMobileScroll();
  const [{ menuState }, send] = useReducer(mobileMenuReducer, {
    menuState: 'closed',
  });

  const navigateToSection = (id: string): void => {
    send({ type: 'CLOSE' });
    scroller.scrollTo(id, {
      duration: 300,
      smooth: true,
      offset: -64,
    });
  };

  // * Close automatically menu if user
  // scrolls while state is it's 'opened'
  useEffect(() => {
    if (menuState !== 'opened') return;

    send({ type: 'CLOSE' });
  }, [scrollY]);

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
        animate={menuState}
        variants={mobileMenuContainerVariants}
        initial='closed'
        data-state={menuState}>
        <motion.li variants={mobileMenuChildVariants}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => navigateToSection('services')}>
            services
          </button>
        </motion.li>
        <motion.li variants={mobileMenuChildVariants}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => navigateToSection('team')}>
            team
          </button>
        </motion.li>
        <motion.li variants={mobileMenuChildVariants}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => navigateToSection('contact')}>
            contact
          </button>
        </motion.li>
        <motion.li variants={mobileMenuChildVariants}>
          <button
            className={styles.mobileMenuButton}
            onClick={() =>
              copyToClipboard('(804) 307-3653', send({ type: 'CLOSE' }))
            }>
            <div style={{ width: 14 }}>
              <PhoneIcon />
            </div>
          </button>
        </motion.li>
      </motion.ul>
    </>
  );
};
