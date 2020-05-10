import React from 'react';
import classnames from 'classnames';
import styles from './MemberThumbnail.module.scss';

export const MemberThumbnail = () => {
  return (
    <figure>
      <h2
        className={classnames([
          'text-right',
          'font-bold',
          'font-sm',
          styles.role,
        ])}>
        co-
        <br />
        founder
      </h2>
      <div className={styles.thumbnail}></div>
    </figure>
  );
};
