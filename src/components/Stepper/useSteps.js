import { useCallback, useState, useMemo } from "react";

export default (stepsLength) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [skipped, setSkipped] = useState(new Set());
  const [canceled, setCanceled] = useState(new Set());

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
    setCanceled(new Set());
  }, []);

  const handleNext = useCallback(() => {
    if (activeStep === stepsLength - 1) {
      return;
    }
    setCompleted((new Set(completed)).add(activeStep));
    setActiveStep(prev => prev + 1);
  }, [stepsLength, activeStep, completed]);

  const handleSkip = useCallback(() => {
    if (activeStep === stepsLength - 1) {
      return;
    }
    setActiveStep(prev => prev + 1);
  }, [stepsLength, activeStep]);
  const handleFinish = useCallback(() => {

  }, []);

  const getStatus = useCallback((idx) => {
    if (idx === activeStep) {
      return 'processing';
    }

    if (completed.has(idx)) {
      return 'completed';
    }

    if (canceled.has(idx)) {
      return 'canceled';
    }

    if (skipped.has(idx)) {
      return 'skipped';
    }

  }, [activeStep, canceled, skipped, completed]);

  return {
    getStatus,
    activeStep,
    completed,
    skipped,
    canceled,
    handleReset,
    handleNext,
    handleSkip,
    handleFinish,
  };
};
