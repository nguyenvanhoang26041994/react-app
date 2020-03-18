import React, { useState, useCallback } from 'react';
import { Stepper, Button } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className, hiddenHeader }) => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = useCallback(() => setActiveStep(prev => prev + 1), []);
  const handleFinish = useCallback(() => setActiveStep(5), []);

  return (
    <PracticeBox wrapperClassName={className} header={hiddenHeader ? null : 'STEPPER'}>
      <Stepper activeStep={activeStep} className="mb-5">
        <Stepper.Step key={1} label="Step One" />
        <Stepper.Step key={2} label="Step Two" />
        <Stepper.Step key={3} label="Notification" icon="bell" />
        <Stepper.Step key={4} label="Shutdown" icon="power-off" />
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
