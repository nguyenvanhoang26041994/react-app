import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import PureConfirm from '../PureConfirm';
import Popover from '../Popover';

const Popconfirm = ({ className, onOk, onCancel, children, ...otherProps }) => {
  const [visible, seVisible] = useState(false);

  const close = () => seVisible(false);

  const handleOk = useCallback(() => {
    close();
    onOk();
  }, []);

  const handleCancel = useCallback(() => {
    close();
    onCancel();
  }, []);

  const onVisibleChange = useCallback(_visible => seVisible(_visible), []);

  return (
    <Popover
      visible={visible}
      onVisibleChange={onVisibleChange}
      overlayClass="rc-pop-confirm"
      className={className}
      overlay={
        <PureConfirm
          onOk={handleOk}
          onCancel={handleCancel}
          {...otherProps}
        />
      }
      {...otherProps}
    >
      {children}
    </Popover>
  );
};

Popconfirm.displayName = 'Popconfirm';
Popconfirm.propTypes = {
  className: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.any,
};
Popconfirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
};

export default Popconfirm;
