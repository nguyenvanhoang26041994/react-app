import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Menu from './Menu';
import './style/Menu.GroupItem.scss';

const GroupItem = ({ className, label, ...otherProps }) => (
  <li className={cn('rc-menu-groupitem', className)}>
    <div className="rc-menu-item rc-menu-groupitem__label">{label}</div>
    <Menu className="rc-menu-groupitem__menu" {...otherProps} />
  </li>
);

GroupItem.displayName = 'GroupItem';
GroupItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
};
GroupItem.defaultProps = {};

export default GroupItem;
