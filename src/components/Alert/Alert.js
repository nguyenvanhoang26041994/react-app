import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
          <div className={cn('rc-alert', { '--close-animation': !open })}>
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

Alert.displayName = 'Alert';
Alert.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  duration: PropTypes.number,
  children: PropTypes.any,
};
Alert.defaultProps = {
  onClose: f => f,
  duration: 3000,
};

export default Alert;
