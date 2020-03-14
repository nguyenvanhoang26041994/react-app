import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

require('./PureConfirm.scss');

const PureConfirm = ({
  confirmRef,
  children,
  header,
  className,
  onOkClick,
  onCancelClick,
  ...otherProps
}) => {
  return (
    <div className={cn('rc-pure-confirm', className)} ref={confirmRef} {...otherProps}>
      <div className="rc-pure-confirm-inside-wraper">
        <div className="rc-pure-confirm-header">{header}</div>
        <div className="rc-pure-confirm-content">{children}</div>
      </div>
      <div className="rc-pure-confirm-buttons">
        <span className="rc-pure-confirm-cancel" onClick={onCancelClick}>Cancel</span>
        <span className="rc-pure-confirm-ok" onClick={onOkClick}>OK</span>
      </div>
    </div>
  );
};

PureConfirm.displayName = 'PureConfirm';
PureConfirm.propTypes = {};
PureConfirm.defaultProps = {};

export default PureConfirm;
