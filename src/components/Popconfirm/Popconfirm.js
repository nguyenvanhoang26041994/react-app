import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import PureConfirm from '../PureConfirm';
import Popover from '../Popover';

const Popconfirm = ({ className, onOk, onCancel, children, ...otherProps }) => {
  const [visible, seVisible] = useState(false);

  const closePopConfirm = () => seVisible(false);

  const handleOk = useCallback(() => {
    closePopConfirm();
    onOk();
  }, []);

  const handleCancel = useCallback(() => {
    closePopConfirm();
    onCancel();
  }, []);

  const handleVisibleChange = useCallback(_visible => seVisible(_visible),[]);

  return (
    <Popover
      visible={visible}
      onVisibleChange={handleVisibleChange}
      overlayClass="rc-pop-confirm"
      overlay={
        <PureConfirm
          onOk={handleOk}
          onCancel={handleCancel}
        />
      }
      className={className}
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
