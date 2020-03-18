import React, { useState } from 'react';
import cn from 'classnames';
import { Drawer, PureDrawer, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';
import StepperBox from './Stepper.box';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="DRAWER" wrapperClassName="mb-2">
        <PureDrawer className="neumorphism" header="Drawer Header">
          <StepperBox hiddenHeader className="mt-2" />
        </PureDrawer>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Drawer className="mb-2 w-1/3" header="Drawer Header" open={isOpen} onClose={() => setIsOpen(false)}>
          <StepperBox hiddenHeader className="mt-2" />
        </Drawer>
        <div>
          <Button onClick={() => setIsOpen(true)}>Show Drawer</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
