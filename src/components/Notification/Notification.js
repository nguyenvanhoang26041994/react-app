import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Portal from '../Portal';
import PureNotification from '../PureNotification';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Notification.scss');

const Notification = ({ children, onClose, open, duration, ...otherProps }) => {
  const onBellClick = useCallback(() => onClose(), [onClose]);
  const delayOpen = useSupportCloseAnimation(open);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-notification', { 'rc-notification--close-animation': !open })}>
            <PureNotification
              onBellClick={onBellClick}
              {...otherProps}
            >
              {children}
            </PureNotification>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Notification.defaultProps = {
  onClose: f => f,
  duration: 5000,
};

export default Notification;
