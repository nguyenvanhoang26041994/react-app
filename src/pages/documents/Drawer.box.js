import React, { useState } from 'react';
import cn from 'classnames';
import { Drawer, Select, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';
import CollapseBox from './Collapse.box';

import TabsBox from './Tabs.box';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2" header="DRAWER">
        <Drawer className="mb-2 w-1/2" header="DRAWER HEADER" open={isOpen} onClose={() => setIsOpen(false)} canOutsideClickClose>
          <Select className="mb-2">
            <Select.Option value="one">Option One</Select.Option>
            <Select.Option value="two">Option Two</Select.Option>
            <Select.Option value="three">Option Three</Select.Option>
            <Select.Option value="four">Option Four</Select.Option>
            <Select.Option value="five">Option Five</Select.Option>
          </Select>
          <CollapseBox className="mt-10" />
        </Drawer>
        <div>
          <Button onClick={() => setIsOpen(true)}>Show Drawer</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
