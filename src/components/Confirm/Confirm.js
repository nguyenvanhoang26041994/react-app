import React, { useRef, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import PureConfirm from '../PureConfirm';

import useDebounce from '../../hooks/useDebounce';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import push from './push';

require('./Confirm.scss');

const Confirm = ({ className, open, onClose, onOk, onCancel, ...otherProps }) => {
  const delayOpen = useDebounce(open, 100);
  const _onOk = useCallback(() => {
    onClose();
    onOk();
  }, []);

  const _onCancel = useCallback(() => {
    onClose();
    onCancel();
  }, []);

  useLockBodyScroll(delayOpen);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <div className={cn('rc-confirm', { '--close-animation': !open })}>
            <PureConfirm
              className={className}
              onOk={_onOk}
              onCancel={_onCancel}
              {...otherProps}
            />
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

Confirm.push = push;
Confirm.displayName = 'Confirm';
Confirm.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
};
Confirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
};

export default Confirm;
