import React, { useState } from 'react';
import cn from 'classnames';
import { Modal, Textbox, Button, Select, Stepper, Switch } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [canOutsideClickClose] = useState(true);

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="MODAL" wrapperClassName="mb-2">
        <Modal open={isOpen} onClose={() => setIsOpen(false)} canOutsideClickClose={canOutsideClickClose}>
          <div className="flex flex-col items-center p-10" style={{ width: '40em' }}>
            <Stepper activeStep={1}>
              <Stepper.Step label="Step First" />
              <Stepper.Step label="Step Second" />
              <Stepper.Step label="Step Third" />
            </Stepper>
            <form className="flex flex-col w-full" onSubmit={e => e.preventDefault()}>
              <Textbox label="Your name" className="mb-2" placeholder="Your name please!" />
              <Select label="Sex" className="mb-2 w-full" placeholder="--Select Sex--">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Femal Two</Select.Option>
              </Select>
              <div className="flex justify-end">
                <Button onClick={() => setIsOpen(false)}>Submit</Button>
              </div>
            </form>
          </div>
        </Modal>
        <div className="flex items-center">
          <Button onClick={() => setIsOpen(true)} className="mr-2">Show Modal</Button>
        </div>
      </PracticeBox>
    </div>
  );
};
