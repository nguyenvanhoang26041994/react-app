import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import useSemanticProp from '../../hooks/useSemanticProp';

require('./Step.scss');

const mStatus = Object.freeze({
  processing: '--processing',
  completed: '--completed',
  canceled: '--canceled',
});

const Step = ({ className, title, children, icon, stepNumber, ...otherProps }) => {
  const status = useSemanticProp('status', otherProps, Object.keys(mStatus), [
    otherProps.processing,
    otherProps.completed,
    otherProps.canceled,
    otherProps.status,
  ]);

  return (
    <div className={cn('rc-step', mStatus[status], className)}>
      <div className="rc-step-rail" />
      <div className="rc-step-avatar">
        {status === 'completed' && (<Icon name="check" />)}
        {status !== 'completed' && (<span>{icon ? <Icon name={icon} /> : stepNumber}</span>)}
      </div>
      <div className="rc-step-content">
        <div className="rc-step-title">{title}</div>
        <div className="rc-step-description">{children}</div>
      </div>
    </div>
  );
};

Step.displayName = 'Step';
Step.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.any,
  children: PropTypes.any,
  stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.oneOf(Object.keys(mStatus)),
  processing: PropTypes.bool,
  completed: PropTypes.bool,
  canceled: PropTypes.bool,
};
Step.defaultProps = {};

export default Step;
