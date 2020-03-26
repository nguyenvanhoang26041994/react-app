import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemGroup from './ItemGroup';
import Sub from './Sub';

require('./Menu.scss');

const Menu = ({ className, children, selectedKeys, iconOnly }) => {
  return (
    <ul className={cn('rc-menu',{ '--icon-only': iconOnly }, className)}>
      {React.Children.map(children, elm => React.cloneElement(elm, {
        ...elm.props,
        iconOnly,
        selected: selectedKeys.indexOf(elm.key) >= 0,
        selectedKeys,
      }))}
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
  selectedKeys: PropTypes.array,
};
Menu.defaultProps = {
  selectedKeys: [],
};

export default Menu;
