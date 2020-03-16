import React , { useEffect, useState } from 'react';
import cn from 'classnames';
import { Tabs } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

const TimeRender = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return (
    <div className="w-full flex justify-center items-center text-xl" style={{ height: '10em' }}>
      {(new Date(time).toUTCString())}
    </div>
  );
}

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TABS">
      <Tabs className="w-full" defaultTab="tab-1">
        <Tabs.Tab value="tab-1" label="ONE"><TimeRender /></Tabs.Tab>
        <Tabs.Tab value="tab-2" label="TWO"><TimeRender /></Tabs.Tab>
        <Tabs.Tab value="tab-3" label="THREE"><TimeRender /></Tabs.Tab>
        <Tabs.Tab value="tab-4" label="FOUR"><TimeRender /></Tabs.Tab>
      </Tabs>
    </PracticeBox>
  );
};
