/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Menu.Item.scss';

const MenuItem = ({
  className,
  elmKey,
  icon,
  children,
  activeKey,
  onClick,
  ...otherProps
}) => (
  <li
    className={cn(
      'rc-menu-item',
      { 'rc-menu-item--active': elmKey === activeKey },
      className,
    )}
    onClick={() => onClick(elmKey)}
    {...otherProps}
  >
    {icon && <span className="rc-menu-item__icon">{icon}</span>}
    <span className="rc-menu-item__item-name">{children}</span>
  </li>
);

MenuItem.displayName = 'Menu.Item';
MenuItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
};
MenuItem.defaultProps = {};

export default MenuItem;
