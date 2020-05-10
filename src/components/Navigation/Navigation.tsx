import React from 'react';
import classnames from 'classnames';
import styles from './Navigation.module.scss';
import { Logo } from '../Logo/Logo';

function Navigation() {
  return (
    <nav className={classnames(['w-full', 'bg-white', styles.container])}>
      <div
        className={classnames([
          'c-py-06',
          'c-pl-06',
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
        <ul className={classnames(['c-space-x-05', 'd-flex', 'items-center'])}>
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
      </div>
    </nav>
  );
}

export default Navigation;
