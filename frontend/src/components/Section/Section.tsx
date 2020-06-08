import React, { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './Section.module.scss';

type TSection = {
  children?: ReactNode;
  border?: boolean;
};

export const Section = ({ children, border }: TSection) => {
  return (
    <div
      className={classnames([
        'd-grid',
        'grid-gutter-left',
        { 'border-black-full': border },
        styles.section,
      ])}>
      {children}
    </div>
  );
};
