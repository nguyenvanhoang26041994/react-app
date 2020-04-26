import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Loader from '../Loader';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit, isString } from '../../utils/helpers';

const mColors = Object.freeze({
  primary: '--primary',
  danger: '--danger',
  glassed: '--glassed',
  transparent: '--transparent',
});

const mShapes = Object.freeze({
  circle: '--circle',
  rounded: '--rounded',
});

const lColors = Object.keys(mColors);
const lShapes = Object.keys(mShapes);

const Button = React.forwardRef(({
  className,
  icon,
  pressed,
  textColor,
  size,
  style,
  children,
  loading,
  disabled,
  ...otherProps
}, ref) => {
  const shape = useSemanticProp('shape', otherProps, lShapes);
  const color = useSemanticProp('color', otherProps, lColors);
  const isSemanticColor = useMemo(() => !!mColors[color], [color]);
  const isColored = useMemo(() => !isSemanticColor && color, [isSemanticColor, color]);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lColors,
    ...lShapes,
    'color',
    'shape',
  ]), [otherProps]);

  return (
    <button
      ref={ref}
      className={cn(
        'rc-button',
        {
          '--icon-button': icon,
          '--pressed': pressed,
          '--colored': isColored,
          '--loading': loading,
        },
        mShapes[shape],
        mColors[color],
        className,
      )}
      style={{
        color: textColor,
        backgroundColor: isColored ? color : null,
        fontSize: size,
        ...style
      }}
      disabled={loading || disabled}
      {...passedProps}
    >
      {loading && <Loader.Spinner />}
      {(function() {
        if (icon && isString(icon)) {
          return (
            <Icon name={icon} />
          );
        }

        if (icon) {
          return icon;
        }

        return children;
      })()}
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
  icon: PropTypes.any,
  textColor: PropTypes.string,
  pressed: PropTypes.bool,
  glassed: PropTypes.bool,
  style: PropTypes.object,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  shape: PropTypes.string,
  danger: PropTypes.bool,
  children: PropTypes.any,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
