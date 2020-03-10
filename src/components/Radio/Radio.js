import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

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
      {/* <Icon name="dot-circle" className="rc-radio-check" /> */}
    </span>
  );
};

Radio.displayName = 'Radio';
Radio.propTypes = {};
Radio.defaultProps = {};

export default Radio;
