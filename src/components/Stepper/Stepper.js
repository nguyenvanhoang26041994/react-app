import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Step from './Step';

const Stepper = ({ className, children }) => {
  return (
    <div className={cn('rc-stepper', className)}>
      {children}
    </div>
  );
};

Stepper.Step = Step;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
};
Stepper.defaultProps = {};

export default Stepper;
