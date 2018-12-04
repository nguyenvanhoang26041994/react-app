/**
 * Core input
 * just one input, no div wrapper
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Input.Native.scss';

export const sizes = Object.freeze({
  small: 'rc-native-input--small',
  large: 'rc-native-input--large',
});

const NativeInput = ({
  className,
  size,
  htmlType,
  inputRef,
  ...otherProps
}) => (
  <input
    {...otherProps}
    ref={inputRef}
    type={htmlType}
    className={cn('rc-native-input', sizes[size], className)}
  />
);

NativeInput.displayName = 'Textbox.Native';
NativeInput.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.any,
  size: PropTypes.oneOf(Object.keys(sizes)),
  htmlType: PropTypes.oneOf([
    'text',
    'password',
    'number',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'month',
    'search',
    'tel',
    'time',
    'url',
    'week',
    'color',
  ]),
};
NativeInput.defaultProps = {
  htmlType: 'text',
};

export default NativeInput;
