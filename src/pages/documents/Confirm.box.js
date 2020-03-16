import React, { useState } from 'react';
import cn from 'classnames';
import { Confirm, PureConfirm, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';
import { pushConfirm } from '../../components/neumorphism';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="CONFIRM" wrapperClassName="mb-2">
        <PureConfirm header="Confirm Header">
          Confirm Firm Content. This is a concept of Confirm.
          Please click the button to show the real Confirm
        </PureConfirm>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Confirm header="Confirm Header" open={isOpen} onClose={() => setIsOpen(false)}>
          Confirm Firm Content. This is a concept of Confirm.
          Please click the button to show the real Confirm
        </Confirm>
        <div className="flex">
          <Button onClick={() => setIsOpen(true)} className="mr-2">Show Confirm</Button>
          <Button onClick={() => pushConfirm({ children: 'Push Confirm Content' })}>Push Confirm</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
