import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./DatePicker.scss');

const DatePicker = ({ className, label, ...otherProps }) => {
  return (
    <div className={cn('rc-date-picker', className)} {...otherProps}>
      <div>{(new Date(Date.now())).toDateString()}</div>
      {label && (<label className="rc-date-picker-label">{label}</label>)}
    </div>
  );
};

DatePicker.displayName = 'DatePicker';
DatePicker.propTypes = {};
DatePicker.defaultProps = {};

export default DatePicker;
