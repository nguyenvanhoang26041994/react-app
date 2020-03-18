import React from 'react';

import { Tabs } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';
import StepperBox from './Stepper.box';
import ProgressBox from './Progress.box';
import StepperSimpleBox from './StepperSimple.box';
import ConfirmBox from './Confirm.box';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TABS">
      <Tabs className="w-full" defaultTab="tab-1">
        <Tabs.Tab value="tab-1" label="ONE"><StepperBox hiddenHeader className="m-3" /></Tabs.Tab>
        <Tabs.Tab value="tab-2" label="TWO"><StepperSimpleBox className="m-3" /></Tabs.Tab>
        <Tabs.Tab value="tab-3" label="THREE"><ProgressBox className="m-3" /></Tabs.Tab>
        <Tabs.Tab value="tab-4" label="FOUR"><ConfirmBox className="m-3" /></Tabs.Tab>
      </Tabs>
    </PracticeBox>
  );
};
