import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Button.scss');

const mTypes = Object.freeze({
  primary: '--primary',
  danger: '--danger',
});

const Button = ({ className, circle, rounded, buttonRef, icon, pressed, color, fontSize, style, children, ...otherProps }) => {
  const type = useSemanticProp('type', otherProps, Object.keys(mTypes));

  const passedProps = useMemo(() => omit(otherProps, [
    ...Object.keys(mTypes),
    'type',
  ]), [otherProps]);

  return (
    <button
      className={cn(
        'rc-button',
        {
          '--circle': circle,
          '--icon-button': icon,
          '--rounded': rounded,
          '--pressed': pressed,
        },
        mTypes[type],
        className,
      )}
      ref={buttonRef}
      style={{
        color: color || null,
        fontSize: fontSize || null,
        ...style
      }}
      {...passedProps}
    >
      {icon ? <Icon name={icon} /> : children}
    </button>
  );
};

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
  primary: PropTypes.bool,
  type: PropTypes.string,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
