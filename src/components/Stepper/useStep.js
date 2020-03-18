import { useCallback } from "react";

/**
 * steps=['step-1', 'step-2', 'step-3']
 * 
 * currentSteps = {
 *  'step-1': 'completed',
 *  'step-2': 'processing',
 * }
 */
export default (steps, currentSteps) => {
  const handleNext = useCallback(() => {});
  const handlePrev = useCallback(() => {});
  const handlerSkip = useCallback(() => {});
  const handlerFinish = useCallback(() => {});

  return {
    handleNext,
    handlePrev,
    handlerSkip,
    handlerFinish,
  };
};
