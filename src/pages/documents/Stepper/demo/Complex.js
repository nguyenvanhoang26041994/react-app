import React from 'react';
import { Stepper, ButtonGroup, Button } from '../../../../components/core';

const Demo = () => {
  const {
    getStatus,
    activeStep,
    handleReset,
    handleNext,
    handleSkip,
    handleCancel,
    handleFinish,
  } = Stepper.useSteps({
    maxStepIdx: 3,
    optional: [1, 2]
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" activeStep={activeStep}>
        <Stepper.Step
          title="Step One"
          status={getStatus(0)}
        >
          Description One
        </Stepper.Step>
        <Stepper.Step
          title="Step Optional"
          status={getStatus(1)}
        >
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Optional"
          status={getStatus(2)}
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          status={getStatus(3)}
        >
          Description Four
        </Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleSkip}>Skip</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleFinish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Stepper, ButtonGroup, Button } from '@/components/core';

export default () => {
  const {
    getStatus,
    activeStep,
    handleReset,
    handleNext,
    handleSkip,
    handleCancel,
    handleFinish,
  } = Stepper.useSteps({
    maxStepIdx: 3,
    optional: [1, 2]
  });

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" activeStep={activeStep}>
        <Stepper.Step
          title="Step One"
          status={getStatus(0)}
        >
          Description One
        </Stepper.Step>
        <Stepper.Step
          title="Step Optional"
          status={getStatus(1)}
        >
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Optional"
          status={getStatus(2)}
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          status={getStatus(3)}
        >
          Description Four
        </Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={handleSkip}>Skip</Button>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleFinish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};
`;

export default Demo;
