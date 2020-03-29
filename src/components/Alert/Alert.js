import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Portal from '../Portal';
import PureAlert from '../PureAlert';
import { rootAlert } from '../Portal/portalNode';

import useDebounce from '../../hooks/useDebounce';

require('./Alert.scss');

const Alert = ({ onClose, open, duration, ...otherProps }) => {
  const delayOpen = useDebounce(open, 100);

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
          />
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
  alertRef: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.any,
  closable: PropTypes.bool,
};
Alert.defaultProps = {
  onClose: f => f,
  duration: 3000,
};

export default Alert;
