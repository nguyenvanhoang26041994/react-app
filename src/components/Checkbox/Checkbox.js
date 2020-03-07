import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

require('./Checkbox.scss');

const Checkbox = ({ checkboxRef, className, ...otherProps }) => {
  return (
    <span className={cn('rc-checkbox', className)}>
      <input
        type="checkbox"
        className="rc-checkbox-input"
        ref={checkboxRef}
        {...otherProps}
      />
      <span className="rc-checkbox-inner" />
      <Icon name="check" className="rc-checkbox-check" />
    </span>
  );
};

export default Checkbox;
