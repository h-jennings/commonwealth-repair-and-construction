import React, { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

type ButtonVariants = 'orange' | 'light';

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariants;
  icon?: ReactNode;
  clickFn?: () => any;
}

export const Button = ({
  children,
  variant = 'orange',
  icon,
  clickFn,
}: ButtonProps) => {
  return (
    <button
      className={classnames([
        'd-flex',
        'items-center',
        'justify-center',
        styles.button,
      ])}
      data-variant={variant}
      onClick={clickFn}>
      {icon && (
        <div className={classnames(['c-mr-05', styles.icon])}>{icon}</div>
      )}
      <span className='d-block'>{children}</span>
    </button>
  );
};
