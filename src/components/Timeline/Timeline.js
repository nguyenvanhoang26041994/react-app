import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Timestone from './Timestone';

require('./Timeline.scss');

const Timeline = ({ className, children, right, reverse, ...otherProps }) => {
  return (
    <div className={cn('rc-timeline', { '--right': right, '--reverse': reverse }, className)} {...otherProps}>
      {children}
    </div>
  );
}

Timeline.Timestone = Timestone;

Timeline.displayName = 'Timeline';
Timeline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  right: PropTypes.bool,
  reverse: PropTypes.bool,
};
Timeline.defaultProps = {};

export default Timeline;
