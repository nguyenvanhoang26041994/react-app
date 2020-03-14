import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const Button = ({ className, circle, transparent, ...otherProps }) => (
  <button
    className={cn('rc-button neumorphism', { 'rc-button--circle': circle, 'rc-button--transparent': transparent }, className)}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {};

export default Button;
