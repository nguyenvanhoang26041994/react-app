import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./PureAlert.scss');

const mTypes = Object.freeze({
  success: '--success',
  warning: '--warning',
  error: '--error'
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
      <div className="rc-pure-alert-inside-wrapper">
        <div className="rc-pure-alert-content">{children}</div>
      </div>
      <Icon name="times" className="rc-pure-alert-close" onClick={onCloseClick} />
    </div>
  );
};

PureAlert.displayName = 'PureAlert';
PureAlert.propTypes = {
  alertRef: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(mTypes)),
  onCloseClick: PropTypes.func,
};
PureAlert.defaultProps = {
  onCloseClick: f => f,
};

export default PureAlert;
