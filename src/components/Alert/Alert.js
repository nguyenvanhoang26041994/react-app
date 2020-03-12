import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Portal from '../Portal';
import PureAlert from '../PureAlert';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Alert.scss');

const Alert = ({ children, onClose, open, duration, ...otherProps }) => {
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
          <div className={cn('rc-alert', { 'rc-alert--close-animation': !open })}>
            <PureAlert
              onCloseClick={onClose}
              {...otherProps}
            >
              {children}
            </PureAlert>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Alert.defaultProps = {
  onClose: f => f,
  duration: 3000,
};

export default Alert;
