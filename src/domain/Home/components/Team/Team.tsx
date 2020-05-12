import React from 'react';
import classnames from 'classnames';
import styles from './Team.module.scss';
import evan from '@/images/evan.jpg';
import { Section } from '@/components/Section/Section';
import { MemberThumbnail } from './MemberThumbnail/MemberThumbnail';

export const Team = () => {
  return (
    <Section border={true}>
      <section className={classnames(['l-pt-06', 'l-pb-07'])}>
        <h1 className={classnames(['font-display', 'text-h1-display'])}>
          team
        </h1>
        <div
          className={classnames([
            'd-grid',
            'grid-content-primary',
            styles.thumbnailContainer,
          ])}>
          <div className='col-span-04'>
            <MemberThumbnail
              text={{
                bio:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                name: 'Evan Jennings',
                role: 'co-founder',
              }}
              src={evan}
            />
          </div>
        </div>
      </section>
    </Section>
  );
};
