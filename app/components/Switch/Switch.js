import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Switch.scss';

export const sizes = Object.freeze({
  small: 'rc-switch--small',
  large: 'rc-switch--large',
});

const Switch = ({ className, size, switchRef, ...otherProps }) => (
  <label className={cn('rc-switch', sizes[size], className)}>
    <input
      {...otherProps}
      ref={switchRef}
      className="rc-switch__input-checkbox"
      type="checkbox"
    />
    <span className="rc-switch__switch" />
  </label>
);

Switch.displayName = 'Switch';
Switch.propTypes = {
  switchRef: PropTypes.array,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  onChange: f => f,
};

export default Switch;
