import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Step from './Step';
import useSteps from './useSteps';
import withSteps from './withSteps';

const getStatus = (activeStep, idx) => {
  if (activeStep === idx) {
    return 'processing';
  }

  if (activeStep > idx) {
    return 'completed';
  }

  return '';
};

const Stepper = ({ className, children, vertical, style, ...otherProps }) => {
  const injectProps = useCallback((idx) => {
    const props = {
      stepNumber: idx + 1,
    };
    if (otherProps.hasOwnProperty('activeStep')) {
      props.status = getStatus(otherProps.activeStep, idx);
    }

    return props;
  }, [otherProps.activeStep]);

  const _customChildren = React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
    ...injectProps(idx),
    ...elm.props,
  }));

  return (
    <div className={cn('rc-stepper', { '--vertical': vertical }, className)} style={style}>
      {vertical ? _customChildren.reverse() : _customChildren}
    </div>
  );
};

Stepper.Step = Step;
Stepper.useSteps = useSteps;
Stepper.withSteps = withSteps;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  activeStep: PropTypes.number,
  children: PropTypes.any,
  vertical: PropTypes.bool,
  style: PropTypes.object,
};
Stepper.defaultProps = {};

export default Stepper;
