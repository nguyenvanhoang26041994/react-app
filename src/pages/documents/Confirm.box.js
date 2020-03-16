import React, { useState } from 'react';
import cn from 'classnames';
import { Confirm, PureConfirm, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

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
        <div>
          <Button onClick={() => setIsOpen(true)}>Show Confirm</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
