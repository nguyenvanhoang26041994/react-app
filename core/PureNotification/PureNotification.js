import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Dialog from '../Dialog';

const PureNotification = React.forwardRef(({ children, className, ...otherProps }, ref) => {
  return (
    <Dialog
      ref={ref}
      className={cn('fpure-notification', className)}
      {...otherProps}
    >
      {children}
    </Dialog>
  );
});

PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};
PureNotification.defaultProps = {};

export default PureNotification;
