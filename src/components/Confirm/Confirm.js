import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Portal from '../Portal';
import PureConfirm from '../PureConfirm';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Confirm.scss');

const Confirm = ({ children, onClose, open, canOutsideClickClose, ...otherProps }) => {
  const confirmRef = useRef();

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, [canOutsideClickClose]);
  const onOkClick = useCallback(() => onClose(), [onClose]);
  const onCancelClick = useCallback(() => onClose(), [onClose]);

  useOnClickOutside(confirmRef, handleClickOutside);
  const delayOpen = useSupportCloseAnimation(open);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-confirm', { 'rc-confirm--close-animation': !open })}>
            <PureConfirm
              confirmRef={confirmRef}
              onOkClick={onOkClick}
              onCancelClick={onCancelClick}
              {...otherProps}
            >
              {children}
            </PureConfirm>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Confirm.defaultProps = {
  onOk: () => false,
  onCancel: () => false,
  onClose: f => f,
};

export default Confirm;
