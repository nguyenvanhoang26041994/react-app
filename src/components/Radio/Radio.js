import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Radio.scss');

const Radio = ({ className, radioRef, ...otherProps }) => {
  return (
    <span className={cn('rc-radio', className)}>
      <input
        type="radio"
        className="rc-radio-input"
        ref={radioRef}
        {...otherProps}
      />
      <span className="rc-radio-inner" />
      <span className="rc-radio-second-inner" />
    </span>
  );
};

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
  radioRef: PropTypes.any,
};
Radio.defaultProps = {};

export default Radio;
