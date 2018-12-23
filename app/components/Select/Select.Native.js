import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.Native.scss';

export const sizes = Object.freeze({
  small: 'rc-select-native--small',
  large: 'rc-select-native--large',
});

const Select = ({ className, selectRef, size, children, ...otherProps }) => (
  <div className={cn('rc-select-native', sizes[size], className)}>
    <select {...otherProps} ref={selectRef}>
      {children}
    </select>
    <span className="rc-select-native__dropdown-icon">❯</span>
  </div>
);

const Option = props => <option {...props} />;
const OptGroup = props => <optgroup {...props} />;

Select.Option = Option;
Select.OptGroup = OptGroup;

Select.displayName = 'Select.Native';
Select.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  selectRef: PropTypes.any,
  children: PropTypes.node, // SelectNative.Option or SelectNative.OptGroup
};
Select.defaultProps = {};

export default Select;
