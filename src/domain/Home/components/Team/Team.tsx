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
        <h1
          className={classnames([
            'font-display',
            'text-h1-display',
            'l-mb-04',
          ])}>
          team
        </h1>
        <div
          className={classnames([
            'd-flex',
            'l-space-x-05',
            styles.thumbnailContainer,
          ])}>
          <div>
            <MemberThumbnail
              text={{
                bio:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Evan Jennings',
                role: 'co-founder',
              }}
              src={evan}
            />
          </div>
          <div>
            <MemberThumbnail
              text={{
                bio:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Trenton Williams',
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
