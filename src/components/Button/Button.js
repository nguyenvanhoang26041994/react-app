import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const Button = ({ className, circle, ...otherProps }) => (
  <button
    className={cn('rc-button', { 'rc-button--circle': circle }, className)}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {};

export default Button;
