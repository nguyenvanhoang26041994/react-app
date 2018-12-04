/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Button.scss';

export const sizes = Object.freeze({
  small: 'rc-button--small',
  large: 'rc-button--large',
});
export const colors = Object.freeze({
  primary: 'rc-button--primary',
  error: 'rc-button--error',
  warning: 'rc-button--warning',
  success: 'rc-button--success',
});

const Button = ({
  className,
  size,
  color,
  htmlType,
  ghost,
  disabled,
  buttonRef,
  children,
  ...otherProps
}) => (
  <button
    {...otherProps}
    type={htmlType}
    className={cn(
      'rc-button',
      sizes[size],
      colors[color],
      { 'rc-button--ghost': ghost },
      className,
    )}
    disabled={disabled}
    ref={buttonRef}
  >
    {React.Children.map(children, item => {
      /* wrapper children by span tags for fix bugs css */
      if (typeof item === 'string' || typeof item === 'number') {
        return <span key={item.key}>{item}</span>;
      }

      return item;
    })}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  ghost: PropTypes.bool,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  buttonRef: PropTypes.any,
  children: PropTypes.any,
};
Button.defaultProps = {
  htmlType: 'button',
};

export default Button;
