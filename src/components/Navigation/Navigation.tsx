import React from 'react';
import Media from 'react-media';
import classnames from 'classnames';
import styles from './Navigation.module.scss';
import { Logo } from '../Logo/Logo';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';

export const Navigation = () => {
  const breakpoint = '(max-width: 930px)';

  return (
    <nav className={classnames(['w-full', 'bg-white', styles.container])}>
      <div
        className={classnames([
          'c-py-06',
          'sm:c-py-04',
          'c-pl-06',
          'sm:c-pl-04',
          'w-full',
          'mx-auto',
          'd-flex',
          'items-center',
          'justify-between',
          styles.content,
        ])}>
        <div className={classnames([styles.logoWrapper])}>
          <Logo />
        </div>
        <Media
          queries={{
            mobile: breakpoint,
          }}>
          {(matches) => {
            return <>{matches.mobile ? <MobileMenu /> : <DesktopMenu />}</>;
          }}
        </Media>
      </div>
    </nav>
  );
};
