import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const Button = ({ className, circle, rounded, transparent, buttonRef, ...otherProps }) => (
  <button
    className={cn(
      'rc-button',
      {
        '--circle': circle,
        '--transparent': transparent,
        '--rounded': rounded,
      },
      className,
    )}
    ref={buttonRef}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  buttonRef: PropTypes.any,
};
Button.defaultProps = {};

export default Button;
