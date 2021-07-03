import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Closer from './Closer';

const Dialog = React.forwardRef(({ className, style, w, ...otherProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('fdialog', className)}
      style={{
        ...style,
        width: w,
      }}
      {...otherProps}
    />
  );
});

Dialog.Backdrop = Backdrop;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Closer = Closer;

Dialog.displayName = 'Dialog';
Dialog.propTypes = {
  className: PropTypes.string,
};
Dialog.defaultProps = {};

export default Dialog;
