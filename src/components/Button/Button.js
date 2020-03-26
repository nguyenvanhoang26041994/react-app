import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Button.scss');

const Button = ({ className, circle, rounded, buttonRef, icon, pressed, color, fontSize, style, children, ...otherProps }) => (
  <button
    className={cn(
      'rc-button',
      {
        '--circle': circle,
        '--icon-button': icon,
        '--rounded': rounded,
        '--pressed': pressed,
      },
      className,
    )}
    ref={buttonRef}
    style={{
      color: color || null,
      fontSize: fontSize || null,
      ...style
    }}
    {...otherProps}
  >
    {icon ? <Icon name={icon} /> : children}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  pressed: PropTypes.bool,
  buttonRef: PropTypes.any,
  style: PropTypes.object,
};
Button.defaultProps = {};

export default Button;
