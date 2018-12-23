/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.Option.scss';

const Option = ({
  className,
  value,
  currentValue,
  handleChange,
  render,
  children,
  ...otherProps
}) => (
  <div
    {...otherProps}
    className={cn(
      'rc-select__option rc-select-option',
      { 'rc-select-option--selected': currentValue === value },
      className,
    )}
    onClick={event => handleChange({ target: { value } }, event)}
  >
    {render({ value, children })}
  </div>
);

Option.displayName = 'Select.Option';
Option.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  render: PropTypes.func,
  value: PropTypes.any,
  children: PropTypes.node,
};
Option.defaultProps = {
  render: ({ children }) => children,
};

export default Option;
