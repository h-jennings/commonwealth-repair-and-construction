import React from 'react';
import classnames from 'classnames';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <header className={classnames([styles.hero])}>
      <div className={classnames(['c-px-06'])}>
        <div
          className={classnames([
            'l-py-06',
            'mx-auto',
            'd-grid',
            'w-full',
            'grid-col-12',
            'c-grid-col-gap-05',
            styles.heroContainer,
          ])}>
          <div className={classnames(['col-span-10'])}>
            <h1
              className={classnames([
                'c-mb-06',
                'text-h2',
                'display',
                styles.headline,
              ])}>
              We provide quality
              <br /> services that empower
              <br /> people.
            </h1>
            <p className={classnames(['text-white'])}>
              Founded by two lifetime craftsmen,
              <br /> commonwealth repair and construction
              <br />
              is how you get things done.
            </p>
          </div>{' '}
        </div>
      </div>
    </header>
  );
};
