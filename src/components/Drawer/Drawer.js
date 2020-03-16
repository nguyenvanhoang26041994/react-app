import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureDrawer from '../PureDrawer';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Drawer.scss');

const Drawer = ({ className, onClose, open, canOutsideClickClose, ...otherProps }) => {
  const drawerRef = useRef();

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, []);

  useOnClickOutside(drawerRef, handleClickOutside);
  const delayOpen = useSupportCloseAnimation(open);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-drawer', { '--close-animation': !open })}>
            <PureDrawer
              className={className}
              drawerRef={drawerRef}
              onCloseClick={onClose}
              {...otherProps}
            />
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Drawer.displayName = 'Drawer';
Drawer.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  canOutsideClickClose: PropTypes.bool,
};
Drawer.defaultProps = {
  onClose: f => f,
};

export default Drawer;
