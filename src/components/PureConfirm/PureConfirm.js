import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

require('./PureConfirm.scss');

const PureConfirm = ({ confirmRef, children, title, onCancel, onOk, className, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-confirm', className)} ref={confirmRef} {...otherProps}>
      <div className="rc-pure-confirm-title">
        <span>{title}</span>
      </div>
      <div className="rc-pure-confirm-content">
        {children}
      </div>
      <div className="rc-pure-confirm-handler">
        <Button className="mr-2" onClick={onCancel}>Cancel</Button>
        <Button className="mr-2" onClick={onOk}>OK</Button>
      </div>
    </div>
  );
};

PureConfirm.displayName = 'PureConfirm';
PureConfirm.propTypes = {
  confirmRef: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.any,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string,
};
PureConfirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
};

export default PureConfirm;
