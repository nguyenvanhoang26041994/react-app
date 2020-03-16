import React, { useRef, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureConfirm from '../PureConfirm';

import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Confirm.scss');

const Confirm = ({ children, onClose, open, canOutsideClickClose, onOk, onCancel, ...otherProps }) => {
  const confirmRef = useRef();

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, []);

  const onOkClick = useCallback(() => {
    onOk();
    onClose();
  }, []);
  const onCancelClick = useCallback(() => {
    onCancel();
    onClose();
  }, []);

  useOnClickOutside(confirmRef, handleClickOutside);
  const delayOpen = useSupportCloseAnimation(open);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-confirm', { '--close-animation': !open })}>
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

Confirm.displayName = 'Confirm';
Confirm.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  open: PropTypes.bool,
  canOutsideClickClose: PropTypes.func,
};
Confirm.defaultProps = {
  onOk: f => f,
  onCancel: f => f,
  onClose: f => f,
};

export default Confirm;
