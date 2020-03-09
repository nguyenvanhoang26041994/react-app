import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

require('./PureConfirm.scss');

const PureConfirm = ({ confirmRef, children, className, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-confirm', className)} ref={confirmRef} {...otherProps}>
      <div className="rc-pure-confirm-content">{children}</div>
      <div className="rc-pure-confirm-buttons">
        <Button className="rc-pure-confirm-ok">OK</Button>
        <Button className="rc-pure-confirm-cancel">Cancel</Button>
      </div>
    </div>
  );
};

PureConfirm.displayName = 'PureConfirm';
PureConfirm.propTypes = {};
PureConfirm.defaultProps = {};

export default PureConfirm;
