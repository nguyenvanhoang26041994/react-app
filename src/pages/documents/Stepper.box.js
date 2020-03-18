import React, { useState, useCallback, useMemo } from 'react';
import { Stepper, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

const _steps = {
  'step-1': {
    label: 'Step One',
  },
  'step-2': {
    label: 'Step One',
  },
  'step-3': {
    label: 'Notification',
    icon : 'bell',
  },
  'step-4': {
    label: 'Shutdown',
    icon : 'power-off',
  },
};

export default ({ className, hiddenHeader }) => {
  const stepLength = useMemo(() => Object.keys(_steps).length, [_steps]);

  const {
    activeStep,
    handleReset,
    handleNext,
    handleSkip,
    handleFinish,
    getStatus,
  } = Stepper.useSteps(stepLength);

  return (
    <PracticeBox wrapperClassName={className} header={hiddenHeader ? null : 'STEPPER'}>
      <Stepper className="mb-5">
        {Object.keys(_steps).map((key, idx) => (
          <Stepper.Step
            key={key}
            name={key}
            label={_steps[key].label}
            icon={_steps[key].icon}
            status={getStatus(idx)}
          />
        ))}
      </Stepper>
      <div className="flex">
        <Button className="mr-2" onClick={handleReset}>Reset</Button>
        <Button className="mr-2" onClick={handleNext}>Next</Button>
        {activeStep < stepLength - 1 && <Button className="mr-2" onClick={handleSkip}>Skip</Button>}
        <Button className="mr-2">Cancel</Button>
        <Button className="mr-2" onClick={handleFinish}>Finish</Button>
      </div>
    </PracticeBox>
  );
};
