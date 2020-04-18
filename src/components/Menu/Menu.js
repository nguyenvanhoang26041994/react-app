import React, { useCallback, useMemo, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemGroup from './ItemGroup';
import Sub from './Sub';

import MenuContext from './MenuContext';
import { omit } from '../../utils/helpers';

const Menu = ({ className, children, onSelectedKeysChange, onItemClick, iconOnly, multiple, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('selectedKeys'), [otherProps]);
  const [selectedKeys, setSelectedKeys] = useState(isControlled ? otherProps.selectedKeys : otherProps.defaultSelectedKeys);
  const [selectedSubKeys, setSelectedSubKeys] = useState([]);
  const [selectedGroupKeys, setSelectedGroupKeys] = useState([]);

  useMemo(() => {
    if (isControlled) {
      return setSelectedKeys(otherProps.selectedKeys);
    }
  }, [isControlled, otherProps.selectedKeys, setSelectedKeys]);

  useEffect(() => {
    onSelectedKeysChange(selectedKeys);
  }, [selectedKeys]);

  const _onItemClick = useCallback((key, itemProps) => {
    if (isControlled) {
      return onItemClick(key, itemProps);
    }

    setSelectedKeys((prev) => {
      if (multiple) {
        const next = new Set(prev);

        if (next.has(key)) {
          next.delete(key);
        } else {
          next.add(key);
        }
        return [...next];
      }

      return [key];
    });
  }, [onItemClick, isControlled, setSelectedKeys]);

  const passedProps = useMemo(() => omit(otherProps, ['selectedKeys', 'defaultSelectedKeys']), [otherProps]);

  const menuValue = useMemo(() => ({
    iconOnly,
    selectedKeys,
    selectedSubKeys,
    selectedGroupKeys,
    onItemClick: _onItemClick,
  }), [iconOnly, selectedKeys, _onItemClick, selectedSubKeys, selectedGroupKeys]);

  return (
    <MenuContext.Provider value={menuValue}>
      <ul className={cn('rc-menu',{ '--icon-only': iconOnly }, className)} {...passedProps}>
        {React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
          _key: elm.key || idx,
        }))}
      </ul>
    </MenuContext.Provider>
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
  defaultSelectedKeys: PropTypes.array,
  onSelectedKeysChange: PropTypes.func,
  onItemClick: PropTypes.func,
  multiple: PropTypes.bool,
};
Menu.defaultProps = {
  defaultSelectedKeys: [],
  onSelectedKeysChange: f => f,
  onItemClick: f => f,
};

export default Menu;
