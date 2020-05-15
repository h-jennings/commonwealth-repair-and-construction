import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Navigation from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.scss';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.page}>
      <Navigation />
      <main className={classnames([styles.pageContent])}>{children}</main>
      <Footer />
    </div>
  );
};
