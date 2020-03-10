import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

require('./PureNotification.scss');

const PureNotification = ({ confirmRef, children, header, className, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-notification', className)} ref={confirmRef} {...otherProps}>
      <div className="rc-pure-notification-content">{children}</div>
      <Button className="rc-pure-notification-close">
        <Icon name="times" />
      </Button>
    </div>
  );
};

PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {};
PureNotification.defaultProps = {};

export default PureNotification;
