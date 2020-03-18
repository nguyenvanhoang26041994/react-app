import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Step from './Step';

require('./Stepper.scss');

const getStatus = (activeStep, key) => {
  if (key < activeStep) {
    return 'completed';
  }

  if (key === activeStep) {
    return 'processing';
  }

  return '';
};

const Stepper = ({ className, children, activeStep }) => {
  return (
    <div className={cn('rc-stepper', className)}>
      {React.Children.map(children, elm => React.cloneElement(elm, {
        status: getStatus(activeStep, +elm.key),
        stepNumber: elm.key,
        ...elm.props
      }))}
    </div>
  );
};

Stepper.Step = Step;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  activeStep: PropTypes.number,
};
Stepper.defaultProps = {};

export default Stepper;
