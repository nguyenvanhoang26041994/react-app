import React, { useRef, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureModal from '../PureModal';

import useDebounce from '../../hooks/useDebounce';
import useClickOutsideOverlay from '../../hooks/useClickOutsideOverlay';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

require('./Modal.scss');

const Modal = ({ className, onClose, open, canOutsideClickClose, ...otherProps }) => {
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
            className={cn('rc-modal', { '--close-animation': !open })}
            ref={wrapperRef}
          >
            <PureModal
              className={className}
              modalRef={ref}
              onCloseClick={onClose}
              {...otherProps}
            />
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Modal.displayName = 'Modal';
Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.any,
  canOutsideClickClose: PropTypes.bool,
  closable: PropTypes.bool,
};
Modal.defaultProps = {
  onClose: f => f,
};

export default Modal;
