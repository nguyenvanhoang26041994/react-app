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

  const [activeStep, setActive] = useState(0);

  return (
    <PracticeBox wrapperClassName={className} header={hiddenHeader ? null : 'SIMPLE STEPPER'}>
      <Stepper className="mb-5" activeStep={activeStep}>
        {Object.keys(_steps).map((key) => (
          <Stepper.Step
            key={key}
            name={key}
            label={_steps[key].label}
            icon={_steps[key].icon}
          />
        ))}
      </Stepper>
      <div className="flex">
        <Button className="mr-2" onClick={() => setActive(0)}>Reset</Button>
        <Button className="mr-2" onClick={() => setActive(prev => prev + 1)} disabled={activeStep >= stepLength -1}>Next</Button>
        <Button className="mr-2" onClick={() => setActive(stepLength)}>Finish</Button>
      </div>
    </PracticeBox>
  );
};
