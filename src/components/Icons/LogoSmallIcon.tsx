import React from 'react';
import styles from './Icons.module.scss';

export const LogoSmallIcon = () => {
  return (
    <div
      className={styles.container}
      style={{
        paddingTop: '100%',
      }}>
      <svg
        className={styles.icon}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'>
        <g fill='none' fillRule='evenodd'>
          <rect width='100' height='100' fill='#FF3E00' />
          <polygon
            fill='#0E0D10'
            fillRule='nonzero'
            points='47.889 85 58.88 75.225 66.721 68.457 64.51 66.406 56.668 73.242 44.739 62.988 44.739 26.211 57.808 37.285 69 27.578 53.921 15 43.533 24.229 31 34.893 31 70.713'
          />
        </g>
      </svg>
    </div>
  );
};
