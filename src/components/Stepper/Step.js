import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

require('./Step.scss');

const mStatus = Object.freeze({
  processing: '--processing',
  completed: '--completed',
  canceled: '--canceled',
});

const Step = ({ className, status, label, children, stepNumber }) => {
  return (
    <div className={cn('rc-step', mStatus[status], className)}>
      <div className="rc-step-rail" />
      <div className="rc-step-avatar">
        {status === 'completed' && (<Icon name="check" />)}
        {status !== 'completed' && (<span>{stepNumber}</span>)}
      </div>
      <div className="rc-step-content">
        <div className="rc-step-label">{label}</div>
        <div className="rc-step-note">{children}</div>
      </div>
    </div>
  );
};

Step.displayName = 'Step';
Step.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(Object.keys(mStatus)),
};
Step.defaultProps = {};

export default Step;
