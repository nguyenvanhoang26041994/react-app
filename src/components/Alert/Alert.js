import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Portal from '../Portal';
import PureAlert from '../PureAlert';
import { rootAlert } from '../Portal/portalNode';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Alert.scss');

const Alert = ({ children, onClose, open, duration, ...otherProps }) => {
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
        <Portal node={rootAlert}>
          <PureAlert
            onCloseClick={onClose}
            className={cn('rc-alert', { '--close-animation': !open })}
            {...otherProps}
          >
            {children}
          </PureAlert>
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
