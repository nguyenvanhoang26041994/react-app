import React, { useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureNotification from '../PureNotification';
import { rootNotification } from '../Portal/portalNode';

import useDebounce from '../../hooks/useDebounce';

require('./Notification.scss');

const Notification = ({ onClose, open, duration, ...otherProps }) => {
  const delayOpen = useDebounce(open);

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
            onCloseClick={onClose}
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
  title: PropTypes.any,
};
Notification.defaultProps = {
  onClose: f => f,
  duration: 10000,
};

export default Notification;
