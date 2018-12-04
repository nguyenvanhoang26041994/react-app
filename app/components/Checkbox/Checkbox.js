import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Checkbox.scss';

const Checkbox = ({ className, size, checkboxRef, ...otherProps }) => (
  <label className={cn('rc-checkbox', className)}>
    <input
      {...otherProps}
      ref={checkboxRef}
      className="rc-checkbox__input-checkbox"
      type="checkbox"
    />
    <span className="rc-checkbox__checkbox" />
  </label>
);

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  checkboxRef: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  onChange: f => f,
};

export default Checkbox;
