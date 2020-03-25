import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemGroup from './ItemGroup';
import Sub from './Sub';

require('./Menu.scss');

const Menu = ({ className, children }) => {
  return (
    <ul className={cn('rc-menu', className)}>
      {children}
    </ul>
  );
};

Menu.Item = Item;
Menu.ItemGroup = ItemGroup;
Menu.Sub = Sub;

Menu.displayName = 'Menu';
Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Menu.defaultProps = {};

export default Menu;
