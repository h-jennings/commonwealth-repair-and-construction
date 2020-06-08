import React, { useEffect } from 'react';
import classnames from 'classnames';
import useSwr from 'swr';
import groq from 'groq';
import styles from './Team.module.scss';
import evan from '@/images/evan.jpg';
import { Section } from '@/components/Section/Section';
import { MemberThumbnail } from './MemberThumbnail/MemberThumbnail';
import { client } from '@/utils/client';
import BlockContent from '@sanity/block-content-to-react';

interface IEmployee {
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  bio: any;
}

const serializer = {
  types: {
    block: ({ children }: any) => (
      <p className={classnames(['font-sm', 'c-pl-04', 'border-l-orange'])}>
        {children}
      </p>
    ),
  },
};

export const Team = () => {
  const query = groq`*[_type == "employee"] | order(firstName)`;

  const { data: employees, error } = useSwr(query, (q) => {
    return client.fetch(q);
  });

  useEffect(() => {
    console.log(employees);
  }, [employees]);

  // Improve loading states
  if (error) return <div>Failed</div>;
  if (!employees) return <div>Loading...</div>;

  return (
    <Section border={true}>
      <section
        id='team'
        className={classnames([
          'l-pt-06',
          'sm:l-pt-04',
          'l-pb-07',
          'sm:l-pb-06',
        ])}>
        <h1
          className={classnames([
            'font-display',
            'text-h1-display',
            'l-mb-04',
            styles.sectionHeader,
          ])}>
          team
        </h1>
        <div
          className={classnames([
            'd-flex',
            'l-space-x-05',
            styles.thumbnailContainer,
          ])}>
          {employees.map((employee: IEmployee) => {
            const { role, _id, firstName, lastName, bio } = employee;
            return (
              <div key={_id}>
                <MemberThumbnail
                  text={{
                    bio: <BlockContent blocks={bio} serializers={serializer} />,
                    name: `${firstName} ${lastName}`,
                    role,
                  }}
                  src={evan}
                />
              </div>
            );
          })}
        </div>
      </section>
    </Section>
  );
};
