import React from 'react';
import classnames from 'classnames';
import styles from './Hero.module.scss';
import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';

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
          <p className={classnames(['text-white', 'sm:font-sm', 'c-mb-07'])}>
            Founded by two lifetime craftsmen, commonwealth repair
            <br className='sm:d-hidden' /> and construction is the trusted
            source to call when
            <br className='sm:d-hidden' /> you want things done right.
          </p>
          <Button variant='light'>Get a quote</Button>
        </div>
      </Section>
    </header>
  );
};
