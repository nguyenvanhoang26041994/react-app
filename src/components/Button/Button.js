import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Button.scss');

const Button = ({ className, circle, rounded, transparent, buttonRef, icon, children, ...otherProps }) => (
  <button
    className={cn(
      'rc-button',
      {
        '--circle': circle,
        '--icon-button': icon,
        '--transparent': transparent,
        '--rounded': rounded,
      },
      className,
    )}
    ref={buttonRef}
    {...otherProps}
  >
    {icon ? <Icon name={icon} /> : children}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  noPadding: PropTypes.bool,
  buttonRef: PropTypes.any,
};
Button.defaultProps = {};

export default Button;
