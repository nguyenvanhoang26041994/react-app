import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const mColors = Object.freeze({
  red: 'rc-button--red',
  green: 'rc-button--green',
  orange: 'rc-button--orange',
  blue: 'rc-button--blue',
});

const mSizes = Object.freeze({
  tiny: 'rc-button--tiny',
  small: 'rc-button--small',
  large: 'rc-button--large',
  huge: 'rc-button--huge',
});

const Button = ({ className, color, size, ...otherProps }) => (
  <button
    className={cn('rc-button', mColors[color], mSizes[size], className)}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(mColors)),
  size: PropTypes.oneOf(Object.keys(mSizes)),
};
Button.defaultProps = {};

export default Button;
