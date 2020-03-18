import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Step from './Step';
import useSteps from './useSteps';

require('./Stepper.scss');

const getStatus = (activeStep, idx) => {
  if (activeStep === idx) {
    return 'processing';
  }

  if (activeStep > idx) {
    return 'completed';
  }

  return '';
};

const Stepper = ({ className, children, activeStep, vertical }) => {
  const _customChildren = React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
    stepNumber: idx + 1,
    status: getStatus(activeStep, idx),
    ...elm.props,
  }));

  return (
    <div className={cn('rc-stepper', { '--vertical': vertical }, className)}>
      {vertical ? _customChildren.reverse() : _customChildren}
    </div>
  );
};

Stepper.Step = Step;
Stepper.useSteps = useSteps;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  activeStep: PropTypes.object,
  children: PropTypes.any,
  vertical: PropTypes.bool,
};
Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;
