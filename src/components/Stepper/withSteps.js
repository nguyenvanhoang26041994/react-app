import React from 'react';

import useSteps from './useSteps';

const withSongEnhancer = (Component) => {
  const ReturnComponent = ({ stepsHookConfig, ...otherProps }) => {
    const stepsHookData = useSteps(stepsHookConfig);
    return (
      <Component
        stepsHookData={stepsHookData}
        {...otherProps}
      />
    );
  };

  ReturnComponent.displayName = `withSteps(${Component.displayName || Component.name || 'Component'})`;

  return ReturnComponent;
};

export default withSongEnhancer;