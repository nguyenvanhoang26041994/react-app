import React, { useMemo, useState } from 'react';
import { Stepper, Button, Switch } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

const _steps = {
  'step-1': {
    label: 'Step One',
  },
  'step-2': {
    label: 'Optional Step',
  },
  'step-3': {
    label: 'Optional Step',
    icon : 'bell',
  },
  'step-4': {
    label: 'Shutdown',
    icon : 'power-off',
  },
};

export default ({ className, hiddenHeader }) => {
  const [vertical, setVertical] = useState(false);

  const maxStep = useMemo(() => Object.keys(_steps).length - 1, [_steps]);

  const {
    handleReset,
    handleNext,
    handleCancel,
    handleSkip,
    handleFinish,
    getStatus,
  } = Stepper.useSteps({ maxStep, optional: [1, 2] });

  return (
    <PracticeBox wrapperClassName={className} header={hiddenHeader ? null : 'COMPLEX STEPPER'}>
      <Stepper className="mb-5" vertical={vertical}>
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
      <div className="flex items-center">
        <Button className="mr-2" onClick={handleReset}>Reset</Button>
        <Button className="mr-2" onClick={handleNext}>Next</Button>
        <Button className="mr-2" onClick={handleSkip}>Skip</Button>
        <Button className="mr-2" onClick={handleCancel}>Cancel</Button>
        <Button className="mr-2" onClick={handleFinish}>Finish</Button>
        <Switch defaultChecked={vertical} onChange={e => setVertical(e.target.checked)} />
      </div>
    </PracticeBox>
  );
};
