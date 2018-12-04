import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Radio.scss';

export const sizes = Object.freeze({
  small: 'rc-radio--small',
  large: 'rc-radio--large',
});

const Radio = ({ className, size, radioRef, ...otherProps }) => (
  <label className={cn('rc-radio', sizes[size], className)}>
    <input
      {...otherProps}
      ref={radioRef}
      className="rc-radio__input-radio"
      type="radio"
    />
    <span className="rc-radio__radio" />
  </label>
);

Radio.displayName = 'Radio';
Radio.propTypes = {
  radioRef: PropTypes.array,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Radio.defaultProps = {
  onChange: f => f,
};

export default Radio;
