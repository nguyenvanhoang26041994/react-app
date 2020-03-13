import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Portal from '../Portal';
import PureDrawer from '../PureDrawer';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import useOnClickOutsideIgnore from '../../hooks/useOnClickOutsideIgnore';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Drawer.scss');

const Drawer = ({ children, onClose, open, canOutsideClickClose, ...otherProps }) => {
  const drawerRef = useRef();

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, [canOutsideClickClose]);

  useOnClickOutside(drawerRef, handleClickOutside);
  const delayOpen = useSupportCloseAnimation(open);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-drawer', { 'rc-drawer--close-animation': !open })}>
            <PureDrawer
              className="w-full sm:w-full md:w-2/5 lg:2/5 xl:2/5"
              drawerRef={drawerRef}
              onCloseClick={onClose}
              {...otherProps}
            >
              {children}
            </PureDrawer>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Drawer.defaultProps = {
  onClose: f => f,
};

export default Drawer;
