import React from 'react';
import classnames from 'classnames';
import styles from './Hero.module.scss';
import { Section } from '@/components/Section/Section';

export const Hero = () => {
  return (
    <header className={classnames([styles.hero])}>
      <Section border={false}>
        <div className={classnames(['l-py-06', 'md:l-py-04', styles.content])}>
          <h1
            className={classnames([
              'c-mb-06',
              'font-display',
              'text-h1-display',
              'sm:font-md-display',
              styles.headline,
            ])}>
            We provide quality
            <br className='sm:d-hidden' /> services that empower
            <br className='sm:d-hidden' /> people.
          </h1>
          <p className={classnames(['text-white', 'sm:font-sm'])}>
            Founded by two lifetime craftsmen, commonwealth repair
            <br className='sm:d-hidden' /> and construction is the trusted
            source to call when
            <br className='sm:d-hidden' /> you want things done right.
          </p>
        </div>
      </Section>
    </header>
  );
};
