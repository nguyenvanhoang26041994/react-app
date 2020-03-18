import { useCallback, useState, useMemo } from "react";

const toObject = (maxStep) => {
  const rs = {};
  for (let i = 0; i <= maxStep; i ++) {
    rs[i] = '';
  }

  return rs;
};

export default ({ maxStep, optional }) => {
  const _optional = useMemo(() => new Set(optional), [optional]);

  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState(toObject(maxStep));

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setSteps(toObject(maxStep));
  }, [maxStep]);

  const handleNext = useCallback(() => {
    if (activeStep === maxStep) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [activeStep]: 'completed',
    }));
    setActiveStep(prev => prev + 1);
  }, [maxStep, activeStep]);

  const handleSkip = useCallback(() => {
    if (!_optional.has(activeStep) || activeStep === maxStep) {
      return;
    }
    setActiveStep(prev => prev + 1);
  }, [maxStep, activeStep, _optional]);

  const handleFinish = useCallback(() => {
    if (maxStep !== activeStep) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [maxStep]: 'completed',
    }));
    setActiveStep(maxStep + 1);
  }, [maxStep, activeStep, steps]);

  const handleCancel = useCallback(() => {
    if (!_optional.has(activeStep) || activeStep > maxStep || activeStep < 0) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [activeStep]: 'canceled',
    }));

    handleSkip();
  }, [activeStep, maxStep, handleSkip, _optional]);

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
