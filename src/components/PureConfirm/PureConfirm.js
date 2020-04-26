import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

const _text = {
  ok: 'OK',
  cancel: 'Cancel',
};

const config = Object.freeze({
  setText: ({ ok, cancel }) => {
    _text.ok = ok;
    _text.cancel = cancel;
  }
});

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
        <Button onClick={onCancel}>{_text.cancel}</Button>
        <Button onClick={onOk}>{_text.ok}</Button>
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

export {
  config,
}
