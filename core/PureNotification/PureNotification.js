import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BadgeAvatar from './BadgeAvatar';

const PureNotification = React.forwardRef(({ children, className, hasDot, ...otherProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('fpure-notification', { 'fpure-notification-has-dot': hasDot }, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
});

PureNotification.BadgeAvatar = BadgeAvatar
PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
PureNotification.defaultProps = {};

export default PureNotification;
