import React, { useState, useCallback, useMemo } from 'react';
import cn from 'classnames';
import { Stepper, Button, Icon } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = useCallback(() => setActiveStep(prev => prev + 1), []);
  const handleFinish = useCallback(() => setActiveStep(5), []);

  const getStatus = useCallback((step) => {
    if (step < activeStep) {
      return 'completed';
    }

    if (step === activeStep) {
      return 'processing'
    }

    return '';
  }, [activeStep]);

  return (
    <PracticeBox wrapperClassName={className} header="STEPPER">
      <Stepper activeStep={activeStep} className="mb-5">
        <Stepper.Step key={1} label="Step One" />
        <Stepper.Step key={2} label="Step Two" />
        <Stepper.Step key={3} label="Step Three" />
        <Stepper.Step key={4} label="Step Four" />
      </Stepper>
      <div className="flex">
        <Button className="mr-2" onClick={() => setActiveStep(1)}>Reset</Button>
        <Button className="mr-2" onClick={handleNext} disabled={activeStep >= 4}>Next</Button>
        <Button className="mr-2" disabled={activeStep >= 4}>Skip</Button>
        <Button className="mr-2" onClick={handleFinish}>Finish</Button>
      </div>
    </PracticeBox>
  );
};
