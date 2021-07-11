import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { notificationRef } from './PusherNotification';
import Dialog from '../Dialog';

const Notification = ({
  className,
  ...otherProps
}) => {
  return (
      <Dialog
        className={cn('fnotification', className)}
        {...otherProps}
      />
  );
};

Notification.ref = notificationRef;
Notification.Header = Dialog.Header;
Notification.Body = Dialog.Body;
Notification.Header = Dialog.Header;
Notification.Closer = Dialog.Closer;

Notification.displayName = 'Notification';
Notification.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};
Notification.defaultProps = {
};

export default Notification;
