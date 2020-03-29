import React, { useState, useCallback } from 'react';
import { Stepper, ButtonGroup, Button } from '../../../../components/core';

const Demo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const next = useCallback(() => {
    setActiveStep(prev => prev + 1); 
  }, []);

  const reset = useCallback(() => {
    setActiveStep(0); 
  }, []);

  const finish = useCallback(() => {
    setActiveStep(4); 
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" activeStep={activeStep}>
        <Stepper.Step title="Step One">Description One</Stepper.Step>
        <Stepper.Step title="Step Two">Description Two</Stepper.Step>
        <Stepper.Step title="Step Three">Description Three</Stepper.Step>
        <Stepper.Step title="Step Four">Description Four</Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={next}>Next</Button>
        <Button onClick={finish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Stepper, ButtonGroup, Button } from '@/components/core';

export default () => {
  const [activeStep, setActiveStep] = useState(0);
  const next = useCallback(() => {
    setActiveStep(prev => prev + 1); 
  }, []);

  const reset = useCallback(() => {
    setActiveStep(0); 
  }, []);

  const finish = useCallback(() => {
    setActiveStep(4); 
  }, []);

  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10" activeStep={activeStep}>
        <Stepper.Step title="Step One">Description One</Stepper.Step>
        <Stepper.Step title="Step Two">Description Two</Stepper.Step>
        <Stepper.Step title="Step Three">Description Three</Stepper.Step>
        <Stepper.Step title="Step Four">Description Four</Stepper.Step>
      </Stepper>
      <ButtonGroup>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={next}>Next</Button>
        <Button onClick={finish}>Finish</Button>
      </ButtonGroup>
    </div>
  );
};
`;

export default Demo;
