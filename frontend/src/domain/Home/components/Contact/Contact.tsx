import React from 'react';
import classnames from 'classnames';
/* import styles from './Contact.module.scss'; */
import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';

export const Contact = () => {
  return (
    <Section border={true}>
      <section
        id='contact'
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
          Contact
        </h1>
        <main
          className={classnames([
            'd-grid',
            'sm:d-block',
            'grid-content-primary',
          ])}>
          <div className={classnames(['col-span-05', 'sm:l-mb-04'])}>
            <h2
              className={classnames([
                'font-display',
                'font-base-display',
                'c-mb-05',
              ])}>
              request a quote
            </h2>
            <p className='c-mb-06'>
              Tell us the nature of your business, how we can help, your timing,
              and we&rsquo;ll get back to you with an estimate as soon as we
              can.
            </p>
            <Button variant='orange'>Request a quote</Button>
          </div>
          <div className={classnames(['col-span-05', 'col-start-07'])}>
            <h2
              className={classnames([
                'font-display',
                'font-base-display',
                'c-mb-05',
              ])}>
              get in touch
            </h2>
            <p className='c-mb-06'>
              Our expert staff are ready and eager to help. Reach out to us with
              any time with your queries and comments.
            </p>
            <p className='c-mb-03'>tel: +1 (804) 307 - 3653</p>
            <p>support: evan.jennings@gmail.com</p>
          </div>
        </main>
      </section>
    </Section>
  );
};
