import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemGroup from './ItemGroup';
import Sub from './Sub';

require('./Menu.scss');

const Menu = ({ className, children, selectedKeys, setSelectedKeys, iconOnly, multiple }) => {
  const onItemClick = useCallback((key) => {
    setSelectedKeys((prev) => {
      if (multiple) {
        const next = new Set(prev);

         // toggle selectedKeys with key
        if (next.has(key)) {
          next.delete(key);
        } else {
          next.add(key);
        }
        return [...next];
      }

      return [key];
    });
  }, []);

  return (
    <ul className={cn('rc-menu',{ '--icon-only': iconOnly }, className)}>
      {React.Children.map(children, elm => React.cloneElement(elm, {
        onItemClick,
        iconOnly,
        selectedKeys,
        setSelectedKeys,
        selected: selectedKeys.indexOf(elm.key) >= 0,
        _key: elm.key,
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
  setSelectedKeys: PropTypes.func,
  multiple: PropTypes.bool,
};
Menu.defaultProps = {
  selectedKeys: [],
  setSelectedKeys: f => f,
};

export default Menu;
