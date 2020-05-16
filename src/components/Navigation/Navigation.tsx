import React from 'react';
import Media from 'react-media';
import classnames from 'classnames';
import styles from './Navigation.module.scss';
import { Logo } from '../Logo/Logo';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Navigation = () => {
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
        <ul
          className={classnames([
            'c-space-x-05',
            'd-flex',
            'items-center',
            'md:d-hidden',
          ])}>
          <li>
            <a>services</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>contact</a>
          </li>
          <li>
            <button>(804) 307-3653</button>
          </li>
        </ul>
        <Media
          queries={{
            mobile: '(max-width: 768px)',
          }}>
          {(matches) => {
            return <>{matches.mobile && <MobileMenu />}</>;
          }}
        </Media>
      </div>
    </nav>
  );
};
