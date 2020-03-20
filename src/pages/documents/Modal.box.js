import React, { useState } from 'react';
import cn from 'classnames';
import { Modal, Progress, Button, Select, Tooltip } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="MODAL" wrapperClassName="mb-2">
        <Modal open={isOpen} onClose={() => setIsOpen(false)} canOutsideClickClose>
          <Progress percent={0.95} />
          <Tooltip label="Select">
            <Select>
              <Select.Option value="a">A</Select.Option>
            </Select>
          </Tooltip>
        </Modal>
        <div>
          <Button onClick={() => setIsOpen(true)} className="mr-2">Show Modal</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
