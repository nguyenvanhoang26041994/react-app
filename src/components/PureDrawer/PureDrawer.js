import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

require('./PureDrawer.scss');

const PureDrawer = ({ drawerRef, children, className, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-drawer', className)} ref={drawerRef} {...otherProps}>
      <div className="rc-pure-drawer-content">{children}</div>
    </div>
  );
};

PureDrawer.displayName = 'PureDrawer';
PureDrawer.propTypes = {};
PureDrawer.defaultProps = {};

export default PureDrawer;
