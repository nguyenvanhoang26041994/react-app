import React from 'react';
import cn from 'classnames';
import { Checkbox, Switch, Radio } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="TOGGLE COMPONENT" wrapperClassName="mb-2" className="flex items-center">
        <Checkbox defaultChecked className="mr-2" />
        <Radio defaultChecked name="same" className="mr-2" />
        <Radio name="same" className="mr-2" />
        <Radio name="same" className="mr-2" />
        <Switch defaultChecked />
      </PracticeBox>
    </div>
  );
};
