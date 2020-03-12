import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

require('./PureAlert.scss');

const mTypes = Object.freeze({
  success: 'rc-pure-alert--success',
  warning: 'rc-pure-alert--warning',
  error: 'rc-pure-alert--error'
});

const PureAlert = ({
  alertRef,
  children,
  className,
  type,
  onCloseClick,
  ...otherProps
}) => {
  return (
    <div className={cn('rc-pure-alert', mTypes[type], className)} ref={alertRef} {...otherProps}>
      <div className="rc-pure-alert-inside-wraper">
        <div className="rc-pure-alert-content">{children}</div>
      </div>
      <Icon name="times" className="rc-pure-alert-close" onClick={onCloseClick} />
    </div>
  );
};

PureAlert.displayName = 'PureAlert';
PureAlert.propTypes = {};
PureAlert.defaultProps = {};

export default PureAlert;
