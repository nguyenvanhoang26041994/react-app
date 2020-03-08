import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const mSizes = Object.freeze({
  small: 'rc-button--small',
  large: 'rc-button--large',
});

const Button = ({ className, size, circle, ...otherProps }) => (
  <button
    className={cn('rc-button', mSizes[size], { 'rc-button--circle': circle }, className)}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(mSizes)),
};
Button.defaultProps = {};

export default Button;
