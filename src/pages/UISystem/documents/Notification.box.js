import React, { useState } from 'react';
import cn from 'classnames';
import { Notification, PureNotification, Button } from '../../../components/core';
import { pushNotification } from '../../../components/neumorphism';

import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="NOTIFICATION" wrapperClassName="mb-2">
        <PureNotification>
          Notification Content. This is a concept of Notification.
          Please click the button to show the real Notification
        </PureNotification>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Notification open={isOpen} onClose={() => setIsOpen(false)} duration={0}>
          Notification Showed, click to the bell to close
        </Notification>
        <div className="flex">
          <Button onClick={() => setIsOpen(true)} className="mr-2">Show Notification</Button>
          <Button onClick={() => pushNotification({ children: 'This Notification was appear via pushNotification' })}>Push Notification</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
