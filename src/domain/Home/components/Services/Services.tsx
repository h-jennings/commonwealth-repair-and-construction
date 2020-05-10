import React from 'react';
import classnames from 'classnames';

export const Services = () => {
  return (
    <section
      id='services'
      className={classnames(['l-pt-05', 'd-grid', 'grid-gutter-left'])}>
      <header>
        <h1 className={classnames(['display', 'c-mb-09'])}>Services</h1>
      </header>
      <main>
        <h2 className={classnames(['display'])}>what we do</h2>
      </main>
    </section>
  );
};
