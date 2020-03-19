import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Timestone.scss');

const Timestone = ({ className, children, ...otherProps }) => {
  return (
    <div className={cn('rc-timestone', className)} {...otherProps}>
      {children}
    </div>
  );
}

Timestone.displayName = 'Timeline.Timestone';
Timestone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Timestone.defaultProps = {};

export default Timestone;
