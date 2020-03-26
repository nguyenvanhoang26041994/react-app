import React from 'react';
import cn from 'classnames';
import { Progress } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="PROGRESS">
      <Progress percent={0.75} r={60} className="mr-10" />
    </PracticeBox>
  );
};
