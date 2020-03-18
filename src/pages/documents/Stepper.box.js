import React from 'react';
import cn from 'classnames';
import { Stepper } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="STEPPER">
      <Stepper>
        <Stepper.Step key="step-1" />
        <Stepper.Step key="step-2" />
        <Stepper.Step key="step-3" />
      </Stepper>
    </PracticeBox>
  );
};
