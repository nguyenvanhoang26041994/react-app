import React, { useRef, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureDrawer from '../PureDrawer';

import useDebounce from '../../hooks/useDebounce';
import useClickOutsideOverlay from '../../hooks/useClickOutsideOverlay';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

require('./Drawer.scss');

const mPlacements = Object.freeze({
  left: '--left',
  right: '--right',
});

const Drawer = ({ className, onClose, open, canOutsideClickClose, placement, ...otherProps }) => {
  const ref = useRef();
  const delayOpen = useDebounce(open, 100);

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, []);

  useLockBodyScroll(delayOpen);
  const wrapperRef = useClickOutsideOverlay({ overlayRef: ref, open: delayOpen, handleClickOutside });

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div
            className={cn(
              'rc-drawer',
              mPlacements[placement],
              {
                '--close-animation': !open,
              }
            )}
              ref={wrapperRef}
            >
            <PureDrawer
              className={className}
              drawerRef={ref}
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
  placement: PropTypes.oneOf(Object.keys(mPlacements)),
  children: PropTypes.any,
  title: PropTypes.any,
  closable: PropTypes.bool,
};
Drawer.defaultProps = {
  onClose: f => f,
  placement: 'right',
};

export default Drawer;
