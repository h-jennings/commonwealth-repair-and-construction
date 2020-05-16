import React from 'react';
import styles from './Logo.module.scss';
import { LogoFullIcon } from '@/components/Icons/LogoFullIcon';
import { LogoSmallIcon } from '@/components/Icons/LogoSmallIcon';

export const Logo = () => {
  return (
    <>
      <div className={styles.logoFull}>
        <LogoFullIcon />
      </div>
      <div className={styles.logoSmall}>
        <LogoSmallIcon />
      </div>
    </>
  );
};
