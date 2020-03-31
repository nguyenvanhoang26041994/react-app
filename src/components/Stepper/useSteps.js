import { useCallback, useState, useMemo } from 'react';

const toObject = (maxStepIdx) => {
  const rs = {};
  for (let i = 0; i <= maxStepIdx; i ++) {
    rs[i] = '';
  }

  return rs;
};

export default ({ maxStepIdx, optional }) => {
  const _optional = useMemo(() => new Set(optional), [optional]);

  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(toObject(maxStepIdx));

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setSteps(toObject(maxStepIdx));
  }, [maxStepIdx]);

  const handleNext = useCallback(() => {
    if (activeStep === maxStepIdx) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [activeStep]: 'completed',
    }));
    setActiveStep(prev => prev + 1);
  }, [maxStepIdx, activeStep]);

  const handleSkip = useCallback(() => {
    if (!_optional.has(activeStep) || activeStep === maxStepIdx) {
      return;
    }
    setActiveStep(prev => prev + 1);
  }, [maxStepIdx, activeStep, _optional]);

  const handleFinish = useCallback(() => {
    if (maxStepIdx !== activeStep) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [maxStepIdx]: 'completed',
    }));
    setActiveStep(maxStepIdx + 1);
  }, [maxStepIdx, activeStep, steps]);

  const handleCancel = useCallback(() => {
    if (!_optional.has(activeStep) || activeStep > maxStepIdx || activeStep < 0) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [activeStep]: 'canceled',
    }));

    handleSkip();
  }, [activeStep, maxStepIdx, handleSkip, _optional]);

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
    handleCancel,
    handleFinish,
  };
};
