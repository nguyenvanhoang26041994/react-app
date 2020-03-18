import React from 'react';

import { Tabs } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';
import StepperBox from './Stepper.box';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TABS">
      <Tabs className="w-full" defaultTab="tab-1">
        <Tabs.Tab value="tab-1" label="ONE"><StepperBox hiddenHeader className="mt-2" /></Tabs.Tab>
        <Tabs.Tab value="tab-2" label="TWO"><StepperBox hiddenHeader className="mt-2" /></Tabs.Tab>
        <Tabs.Tab value="tab-3" label="THREE"><StepperBox hiddenHeader className="mt-2" /></Tabs.Tab>
        <Tabs.Tab value="tab-4" label="FOUR"><StepperBox hiddenHeader className="mt-2" /></Tabs.Tab>
      </Tabs>
    </PracticeBox>
  );
};
