import { useCallback, useState, useMemo } from "react";

const toObject = (length) => {
  const rs = {};
  for (let i = 0; i < length; i ++) {
    rs[i] = '';
  }

  return rs;
};

export default (stepsLength) => {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(toObject(stepsLength));

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setSteps(toObject(stepsLength));
  }, [stepsLength]);

  const handleNext = useCallback(() => {
    if (activeStep === stepsLength - 1) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [activeStep]: 'completed',
    }));
    setActiveStep(prev => prev + 1);
  }, [stepsLength, activeStep]);

  const handleSkip = useCallback(() => {
    if (activeStep === stepsLength - 1) {
      return;
    }
    setActiveStep(prev => prev + 1);
  }, [stepsLength, activeStep]);

  const handleFinish = useCallback(() => {
    if (stepsLength - 1 !== activeStep) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [stepsLength - 1]: 'completed',
    }));
    setActiveStep(stepsLength);
  }, [stepsLength, activeStep, steps]);

  const getStatus = useCallback((idx) => {
    if (idx === activeStep) {
      return 'processing';
    }

    return steps[idx];
  }, [activeStep]);

  return {
    getStatus,
    activeStep,
    handleReset,
    handleNext,
    handleSkip,
    handleFinish,
  };
};
