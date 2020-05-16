import React from 'react';
import classnames from 'classnames';
import styles from './DesktopMenu.module.scss';
import { PhoneIcon } from '@/components/Icons/PhoneIcon';

export const DesktopMenu = () => {
  return (
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
        <button className={classnames(['d-flex', 'items-center'])}>
          <div className={classnames(['c-mr-05', styles.buttonIcon])}>
            <PhoneIcon />
          </div>
          <span>(804) 307-3653</span>
        </button>
      </li>
    </ul>
  );
};
