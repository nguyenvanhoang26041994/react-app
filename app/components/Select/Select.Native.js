import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.scss';

const Select = ({ className, selectRef, options, ...otherProps }) => (
  <select
    {...otherProps}
    className={cn('rc-select-native', className)}
    ref={selectRef}
  >
    {options.map(option => (
      <option key={option.key} value={option.value}>
        {option.children}
      </option>
    ))}
  </select>
);

Select.displayName = 'Select.Native';
Select.propTypes = {
  className: PropTypes.string,
  selectRef: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      children: PropTypes.node,
    }),
  ),
};
Select.defaultProps = {
  options: [],
};

export default Select;
