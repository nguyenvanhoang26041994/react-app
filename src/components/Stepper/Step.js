import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const mStatus = Object.freeze({
  pedding: '--pending',
  completed: '--completed',
  canceled: '--canceled',
});

const Step = ({ className, status }) => {
  return (
    <div className={cn('rc-step', mStatus[status], className)}></div>
  );
};

Step.displayName = 'Step';
Step.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(Object.keys(mStatus)),
};
Step.defaultProps = {};

export default Step;
