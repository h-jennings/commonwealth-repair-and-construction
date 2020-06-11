import React, { useEffect } from 'react';
import classnames from 'classnames';
import useSwr from 'swr';
import groq from 'groq';
import styles from './Team.module.scss';
import { Section } from '@/components/Section/Section';
import { MemberThumbnail } from './MemberThumbnail/MemberThumbnail';
import { client } from '@/utils/client';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '@/utils/image-builder';

interface IEmployee {
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  bio: any;
  image?: any;
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

  // Improve future loading states
  if (error) return <div>Failed</div>;

  return (
    <Section border={true}>
      <section
        id='team'
        className={classnames([
          'l-pt-06',
          'sm:l-pt-04',
          'l-pb-07',
          'sm:l-pb-06',
          styles.section,
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
            'd-grid',
            'l-grid-gap-05',
            styles.thumbnailContainer,
          ])}>
          {employees &&
            employees.map((employee: IEmployee) => {
              const {
                role,
                _id,
                firstName,
                lastName,
                bio,
                image = null,
              } = employee;
              return (
                <div key={_id}>
                  <MemberThumbnail
                    text={{
                      bio: (
                        <BlockContent blocks={bio} serializers={serializer} />
                      ),
                      name: `${firstName} ${lastName}`,
                      role,
                    }}
                    src={urlFor(image).maxWidth(460).url()}
                  />
                </div>
              );
            })}
          <div>
            <MemberThumbnail
              text={{
                bio: <p>testing 123</p>,
                name: `first last`,
                role: 'plumber',
              }}
              src={null}
            />
          </div>
          <div>
            <MemberThumbnail
              text={{
                bio: <p>testing 123</p>,
                name: `first last`,
                role: 'foreman',
              }}
              src={null}
            />
          </div>
        </div>
      </section>
    </Section>
  );
};
