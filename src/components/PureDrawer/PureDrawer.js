import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import Divider from '../Divider';

require('./PureDrawer.scss');

const PureDrawer = ({ drawerRef, children, header, onCloseClick, className, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-drawer', className)} ref={drawerRef} {...otherProps}>
      <div className="rc-pure-drawer-header">
        <span>{header}</span>
        <Button circle className="rc-pure-drawer-toggle" onClick={onCloseClick}>
          <Icon name="times" />
        </Button>
      </div>
      <div className="rc-pure-drawer-content">{children}</div>
    </div>
  );
};

PureDrawer.displayName = 'PureDrawer';
PureDrawer.propTypes = {};
PureDrawer.defaultProps = {};

export default PureDrawer;
