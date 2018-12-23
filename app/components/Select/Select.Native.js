import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.Native.scss';

const Select = ({ className, selectRef, children, ...otherProps }) => (
  <div className={cn('rc-select-native', className)}>
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
  selectRef: PropTypes.any,
  children: PropTypes.node, // SelectNative.Option or SelectNative.OptGroup
};
Select.defaultProps = {};

export default Select;
