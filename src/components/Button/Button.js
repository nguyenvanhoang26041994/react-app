import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Loader from '../Loader';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mTypes = Object.freeze({
  primary: '--primary', // good for submit button
  danger: '--danger',
});

const lTypes = Object.keys(mTypes);

const Button = React.forwardRef(({
  className,
  circle,
  rounded,
  icon,
  pressed,
  color,
  textColor,
  size,
  style,
  glassed,
  children,
  loading,
  disabled,
  ...otherProps
}, ref) => {
  const type = useSemanticProp('type', otherProps, lTypes);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lTypes,
    'type',
  ]), [otherProps]);

  return (
    <button
      ref={ref}
      className={cn(
        'rc-button',
        {
          '--circle': circle,
          '--icon-button': icon,
          '--rounded': rounded,
          '--pressed': pressed,
          '--glassed': glassed,
          '--colored': color,
        },
        mTypes[type],
        className,
      )}
      style={{
        color: textColor,
        backgroundColor: color,
        fontSize: size,
        ...style
      }}
      disabled={loading || disabled}
      {...passedProps}
    >
      {loading && <Loader.Spinner style={{ marginRight: '.5rem' }} />}
      {icon ? <Icon name={icon} /> : children}
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  pressed: PropTypes.bool,
  glassed: PropTypes.bool,
  style: PropTypes.object,
  primary: PropTypes.bool,
  type: PropTypes.string,
  danger: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
