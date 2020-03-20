import React, { useCallback, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';

import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';
import useClickOutsideOverlay from '../../hooks/useClickOutsideOverlay';
import useStopBodyScroll from '../../hooks/useStopBodyScroll';

require('./Modal.scss');

const Modal = ({ className, containerClass, open, onClose, canOutsideClickClose, ...otherProps }) => {
  const ref = useRef();

  const delayOpen = useSupportCloseAnimation(open);

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, [canOutsideClickClose]);

  useStopBodyScroll(delayOpen);
  const wrapperRef = useClickOutsideOverlay({ overlayRef: ref, open: delayOpen, handleClickOutside });

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-modal-container', containerClass)} ref={wrapperRef}>
            <div
              ref={ref}
              className={cn('rc-modal', { '--close-animation': !open }, className)}
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
  containerClass: PropTypes.string,
  onClose: PropTypes.func,
  canOutsideClickClose: PropTypes.bool,
};
Modal.defaultProps = {
  onClose: f => f,
};

export default Modal;
