import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Option.scss');

const Option = ({ className, value, selected, ...otherProps }) => {
  return (
    <li
      value={value}
      className={cn('rc-select-option', { '--selected': selected })}
      {...otherProps}
    />
  );
};

Option.displayName = 'Option';
Option.propTypes = {
  className: PropTypes.string,
  value: PropTypes.value,
  selected: PropTypes.bool,
};
Option.defaultProps = {};

export default Option;
