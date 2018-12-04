import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Select.Option.scss';

const Option = ({
  className,
  value,
  text,
  selected,
  render,
  children,
  ...otherProps
}) => (
  <div
    className={cn(
      'rc-select__option rc-select-option',
      { 'rc-select-option--selected': selected },
      className,
    )}
    {...otherProps}
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
