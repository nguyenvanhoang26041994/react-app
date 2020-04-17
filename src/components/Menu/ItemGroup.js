import React, { useContext, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import MenuContext from './MenuContext';

const ItemGroup = ({ className, children, title, _key }) => {
  const { iconOnly, selectedGroupKeys } = useContext(MenuContext);
  const selected = useMemo(() => selectedGroupKeys.indexOf(_key) >= 0, [selectedGroupKeys, _key]);

  return (
    <li className={cn('rc-menu-item-group', { '--icon-only': iconOnly, '--selected': selected }, className)}>
      <div className="rc-menu-item-group-title"><span>{title}</span></div>
      <ul className="rc-menu-item-group-list">
        {React.Children.map(children, elm => React.cloneElement(elm, {
          _key: elm.key,
          _groupKey: _key,
        }))}
      </ul>
    </li>
  );
};

ItemGroup.displayName = 'Menu.ItemGroup';
ItemGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
};
ItemGroup.defaultProps = {};

export default ItemGroup;
