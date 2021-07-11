import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BadgeAvatar from './BadgeAvatar';

const NoticeNotification = React.forwardRef(({ children, className, hasDot, ...otherProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('fnotice-notification', { 'fnotice-notification-has-dot': hasDot }, className)}
      {...otherProps}
    >
      {children}
    </div>
  );
});

NoticeNotification.BadgeAvatar = BadgeAvatar
NoticeNotification.displayName = 'NoticeNotification';
NoticeNotification.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
NoticeNotification.defaultProps = {};

export default NoticeNotification;
