import React from 'react';
import classnames from 'classnames';
import { Section } from '@/components/Section/Section';
import { MemberThumbnail } from './MemberThumbnail/MemberThumbnail';

export const Team = () => {
  return (
    <Section border={true}>
      <section className={classnames(['l-pt-06', 'l-pb-07'])}>
        <h1 className={classnames(['display'])}>team</h1>
        <MemberThumbnail />
      </section>
    </Section>
  );
};
