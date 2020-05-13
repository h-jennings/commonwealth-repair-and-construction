import React from 'react';
import classnames from 'classnames';
import styles from './MemberThumbnail.module.scss';

type TThumbnailTextContent = {
  role: string;
  name: string;
  bio: string;
};

type TMemberThumbnail = {
  src: string;
  text: TThumbnailTextContent;
};

export const MemberThumbnail = ({ src, text }: TMemberThumbnail) => {
  const overlay =
    'linear-gradient(rgba(14, 13, 16, 0.45), rgba(14, 13, 16, 0.45))';

  return (
    <figure
      className={classnames(['d-grid', 'c-grid-col-gap-05', styles.container])}>
      <h2
        className={classnames([
          'text-right',
          'font-bold',
          'font-sm',
          styles.role,
        ])}>
        {text.role}
      </h2>
      <div>
        <div className={classnames(['c-mb-06', styles.thumbnail])}>
          <div
            className={styles.imageContainer}
            style={{
              backgroundImage: `${overlay}, url('${src}')`,
              backgroundSize: 'cover',
            }}></div>
          <div
            className={classnames([
              'c-px-04',
              'c-pb-02',
              'c-pt-03',
              styles.nameBlock,
            ])}>
            <h3
              className={classnames([
                'font-display',
                'text-left',
                'font-sm-display',
              ])}>
              {text.name}
            </h3>
          </div>
        </div>
        <p className={classnames(['font-sm', 'c-pl-04', styles.bio])}>
          {text.bio}
        </p>
      </div>
    </figure>
  );
};
