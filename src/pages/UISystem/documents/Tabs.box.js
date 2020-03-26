import React from 'react';

import { Tabs } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';
import Progress from '../../../components/Progress';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TABS">
      <Tabs className="w-full" defaultTab="tab-1">
        <Tabs.Tab value="tab-1" label="ONE">
          <Progress percent={0.2} className="m-5" />
        </Tabs.Tab>
        <Tabs.Tab value="tab-2" label="TWO">
          <Progress percent={0.3} className="m-5" />
        </Tabs.Tab>
        <Tabs.Tab value="tab-3" label="THREE">
          <Progress percent={0.4} className="m-5" />
        </Tabs.Tab>
        <Tabs.Tab value="tab-4" label="FOUR">
          <Progress percent={0.5} className="m-5" />
        </Tabs.Tab>
      </Tabs>
    </PracticeBox>
  );
};
