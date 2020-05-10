import React from 'react';
import classnames from 'classnames';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <header className={classnames([styles.hero])}>
      <div>
        <div
          className={classnames([
            'l-py-06',
            'd-grid',
            'grid-gutter-left',
            styles.heroContainer,
          ])}>
          <div>
            <h1 className={classnames(['c-mb-06', 'display', styles.headline])}>
              We provide quality
              <br /> services that empower
              <br /> people.
            </h1>
            <p className={classnames(['text-white'])}>
              Founded by two lifetime craftsmen, commonwealth repair
              <br /> and construction is the trusted source to call when
              <br /> you want things done right.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
