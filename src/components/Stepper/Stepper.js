import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Step from './Step';
import useSteps from './useSteps';

require('./Stepper.scss');

const Stepper = ({ className, children }) => {
  return (
    <div className={cn('rc-stepper', className)}>
      {React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
        stepNumber: idx + 1,
        ...elm.props,
      }))}
    </div>
  );
};

Stepper.Step = Step;
Stepper.useSteps = useSteps;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.object,
};
Stepper.defaultProps = {
  steps: {},
};

export default Stepper;
