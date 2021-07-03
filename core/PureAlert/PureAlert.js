import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Dialog from '../Dialog';

const mTypes = Object.freeze({
  info: 'fpure-alert-info',
  success: 'fpure-alert-success',
  error: 'fpure-alert-err',
  warning: 'fpure-alert--warn',
});

const PureAlert = React.forwardRef(({ children, className, type, ...otherProps }, ref) => {
  return (
    <Dialog
      ref={ref}
      className={cn('fpure-alert', mTypes[type], className)}
      {...otherProps}
    >
      {children}
    </Dialog>
  );
});

PureAlert.displayName = 'PureAlert';
PureAlert.Header = Dialog.Header;
PureAlert.Body = Dialog.Body;
PureAlert.Closer = Dialog.Closer;
PureAlert.Footer = Dialog.Footer;
PureAlert.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.string,
};
PureAlert.defaultProps = {};

export default PureAlert;
