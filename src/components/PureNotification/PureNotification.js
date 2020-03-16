import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';

require('./PureNotification.scss');

const PureNotification = ({
  notificationRef,
  children,
  header,
  className,
  onBellClick,
  ...otherProps
}) => {
  return (
    <div className={cn('rc-pure-notification', className)} ref={notificationRef} {...otherProps}>
      <div className="rc-pure-notification-inside-wrapper">
        <div className="rc-pure-notification-content">{children}</div>
      </div>
      <Icon name="bell" className="rc-pure-notification-bell" onClick={onBellClick} />
    </div>
  );
};

PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {};
PureNotification.defaultProps = {
  header: 'Notification',
};

export default PureNotification;
