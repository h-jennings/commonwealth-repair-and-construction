import React, { useState } from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { PhoneIcon } from '@/components/Icons/PhoneIcon';
import { Button } from '@/components/Button/Button';
import { copyToClipboard } from '@/utils/copy-to-clipboard';

export const DesktopMenu = () => {
  const phoneNumber = '(804) 307-3653';

  const [buttonTextState, setButtonTextState] = useState(phoneNumber);

  function setClipboardConfirmationState(): void {
    setButtonTextState('Copied to clipboard!');

    setTimeout(() => {
      setButtonTextState(phoneNumber);
    }, 1000);
  }

  function handleCallButtonClick(): void {
    copyToClipboard('(804) 307-3653', setClipboardConfirmationState());
  }

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
          clickFn={() => handleCallButtonClick()}
          variant='orange'
          icon={<PhoneIcon />}>
          {buttonTextState}
        </Button>
      </li>
    </ul>
  );
};
