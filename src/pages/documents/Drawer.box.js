import React, { useState } from 'react';
import cn from 'classnames';
import { Drawer, PureDrawer, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="DRAWER" wrapperClassName="mb-2">
        <PureDrawer className="neumorphism" header="Drawer Header">
          This is drawer content, However this Concept using neumorphism css so you can see she shape of design clearly,
          Click the Button to show a real Drawer
        </PureDrawer>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Drawer className="mb-2" header="Drawer Header" open={isOpen} onClose={() => setIsOpen(false)}>
          This is drawer content, However this Concept using neumorphism css so you can see she shape of design clearly,
          Click the Button to show a real Drawer
        </Drawer>
        <div>
          <Button onClick={() => setIsOpen(true)}>Show Drawer</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
