import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';

require('./PureDrawer.scss');

const PureDrawer = ({ drawerRef, children, header, onCloseClick, className, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-drawer', className)} ref={drawerRef} {...otherProps}>
      <div className="rc-pure-drawer-header">
        <span>{header}</span>
        <Button icon="times" circle className="rc-pure-drawer-toggle" onClick={onCloseClick} />
      </div>
      <div className="rc-pure-drawer-content">{children}</div>
    </div>
  );
};

PureDrawer.displayName = 'PureDrawer';
PureDrawer.propTypes = {
  drawerRef: PropTypes.any,
  children: PropTypes.any,
  header: PropTypes.any,
  onCloseClick: PropTypes.func,
  className: PropTypes.string,
};
PureDrawer.defaultProps = {
  onCloseClick: f => f,
};

export default PureDrawer;
