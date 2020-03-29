import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./ItemGroup.scss');

const ItemGroup = ({ className, children, title, iconOnly, selectedKeys, setSelectedKeys, onItemClick }) => {
  return (
    <li className={cn('rc-menu-item-group', { '--icon-only': iconOnly }, className)}>
      <div className="rc-menu-item-group-title"><span>{title}</span></div>
      <ul className="rc-menu-item-group-list">
        {React.Children.map(children, elm => React.cloneElement(elm, {
          iconOnly,
          selected: selectedKeys.indexOf(elm.key) >= 0,
          _key: elm.key,
          selectedKeys,
          setSelectedKeys,
          onItemClick,
        }))}
      </ul>
    </li>
  );
};

ItemGroup.displayName = 'Menu.ItemGroup';
ItemGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  selectedKeys: PropTypes.array,
  setSelectedKeys: PropTypes.func,
};
ItemGroup.defaultProps = {
  selectedKeys: [],
  setSelectedKeys: f => f,
};

export default ItemGroup;
