import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Menu from './Menu';
import './style/Menu.GroupItem.scss';

const GroupItem = ({ className, title, ...otherProps }) => (
  <li className={cn('rc-menu-groupitem', className)}>
    <div className="rc-menu-item rc-menu-groupitem__title">{title}</div>
    <Menu className="rc-menu-groupitem__menu-item" {...otherProps} />
  </li>
);

GroupItem.displayName = 'GroupItem';
GroupItem.propTypes = {
  className: PropTypes.string,
};
GroupItem.defaultProps = {};

export default GroupItem;
