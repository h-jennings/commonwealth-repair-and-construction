import React from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { PhoneIcon } from '@/components/Icons/PhoneIcon';
import { Button } from '@/components/Button/Button';
import { copyToClipboard } from '@/utils/copy-to-clipboard';

export const DesktopMenu = () => {
  return (
    <ul className={classnames(['c-space-x-05', 'd-flex', 'items-center'])}>
      <li>
        <Link
          to='services'
          smooth={true}
          offset={-89}
          duration={300}
          hashSpy={true}>
          services
        </Link>
      </li>
      <li>
        <Link
          to='team'
          smooth={true}
          offset={-89}
          duration={300}
          hashSpy={true}>
          team
        </Link>
      </li>
      <li>
        <a>contact</a>
      </li>
      <li>
        <Button
          clickFn={() => copyToClipboard('(804) 307-3653')}
          variant='orange'
          icon={<PhoneIcon />}>
          (804) 307-3653
        </Button>
      </li>
    </ul>
  );
};
