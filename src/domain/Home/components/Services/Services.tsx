import React from 'react';
import classnames from 'classnames';
import styles from './Services.module.scss';
import { Section } from '@/components/Section/Section';

export const Services = () => {
  return (
    <Section border={true}>
      <section
        id='services'
        className={classnames([
          'l-pb-07',
          'sm:l-pb-06',
          'l-pt-05',
          'sm:l-pt-04',
        ])}>
        <h1
          className={classnames([
            'text-h1-display',
            'font-display',
            'c-mb-09',
          ])}>
          Services
        </h1>
        <h2
          className={classnames([
            'font-display',
            'font-base-display',
            'c-mb-05',
          ])}>
          what we do
        </h2>
        <main
          className={classnames([
            'd-grid',
            'sm:d-block',
            'grid-content-primary',
          ])}>
          <div className={classnames(['col-span-05', styles.col])}>
            <div
              style={{ height: '40px', maxWidth: '458px' }}
              className='bg-orange'></div>
          </div>
          <div
            className={classnames(['col-span-06', 'col-start-07', styles.col])}>
            <p>
              Our projects are planned well, staffed well, and provide a safe
              environment for our clients, design team, and the people who
              perform the work in the field. We know that budget and schedule
              are critical to project success, and communication throughout the
              project helps to foster the best result. We understand that the
              goal of any project is the satisfaction of the people who use the
              space.
            </p>
          </div>
        </main>
      </section>
    </Section>
  );
};
