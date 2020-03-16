import React, { useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureNotification from '../PureNotification';
import { rootNotification } from '../Portal/portalNode';

import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Notification.scss');

const Notification = ({ onClose, open, duration, ...otherProps }) => {
  const delayOpen = useSupportCloseAnimation(open);

  useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal node={rootNotification}>
          <PureNotification
            onBellClick={onClose}
            className={cn('rc-notification', { '--close-animation': !open })}
            {...otherProps}
          />
        </Portal>
      )}
    </React.Fragment>
  );
};

Notification.displayName = 'Notification';
Notification.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  duration: PropTypes.number,
};
Notification.defaultProps = {
  onClose: f => f,
  duration: 5000,
};

export default Notification;
