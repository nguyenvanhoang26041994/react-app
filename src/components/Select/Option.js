import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Option.scss');

const Option = ({ className, value, children, selected, ...otherProps }) => {
  return (
    <li
      value={value}
      className={cn('rc-select-option', { 'rc-select-option--selected': selected })}
      {...otherProps}
    >
      {children}
    </li>
  );
};

Option.displayName = 'Option';
Option.propTypes = {
  className: PropTypes.string,
};
Option.defaultProps = {};

export default Option;
