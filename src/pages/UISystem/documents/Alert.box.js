import React, { useState } from 'react';
import cn from 'classnames';
import { Alert, PureAlert, Button } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';
import { pushAlert } from '../../../components/neumorphism';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="ALERT" wrapperClassName="mb-2">
        <PureAlert className="mb-2">
          Primary Alert
        </PureAlert>
        <PureAlert type="success" className="mb-2">
          Success Alert
        </PureAlert>
        <PureAlert type="warning" className="mb-2">
          Warning Alert
        </PureAlert>
        <PureAlert type="error">
          Error Alert
        </PureAlert>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Alert open={isOpen} onClose={() => setIsOpen(false)}>
          Alert content!
        </Alert>
        <div className="flex">
          <Button onClick={() => setIsOpen(true)} className="mr-2">Show Alert</Button>
          <Button onClick={() => pushAlert({ children: 'Alert Pusher' })}>Push Alert</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
