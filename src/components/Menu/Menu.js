import React, { useCallback, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemGroup from './ItemGroup';
import Sub from './Sub';

import useUncontrolled from '../../hooks/useUncontrolled';
import { omit } from '../../utils/helpers';

require('./Menu.scss');

const Menu = ({ className, children, defaultSelectedKeys, onSelectedKeysChange, onItemClick, iconOnly, multiple, ...otherProps }) => {
  const [selectedKeys, setSelectedKeys, isControlled] = useUncontrolled('selectedKeys', otherProps, {
    defaultState: defaultSelectedKeys,
    onChangeState: onSelectedKeysChange,
  });

  const _onItemClick = useCallback((key, itemProps) => {
    if (isControlled) {
      return onItemClick(key, itemProps);
    }

    onItemClick(key, itemProps);
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

  const passedProps = useMemo(() => omit(otherProps, ['selectedKeys']), [otherProps]);

  return (
    <ul className={cn('rc-menu',{ '--icon-only': iconOnly }, className)} {...passedProps}>
      {React.Children.map(children, elm => React.cloneElement(elm, {
        _onItemClick,
        iconOnly,
        selectedKeys,
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
