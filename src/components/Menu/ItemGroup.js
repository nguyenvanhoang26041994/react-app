import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./ItemGroup.scss');

const ItemGroup = ({ className, children, title, ...otherProps }) => {
  return (
    <li className={cn('rc-menu-item-group')}>
      <div className="rc-menu-item-group-title">{title}</div>
      <ul className="rc-menu-item-group-list">
        {children}
      </ul>
    </li>
  );
};

ItemGroup.displayName = 'Menu.ItemGroup';
ItemGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
ItemGroup.defaultProps = {};

export default ItemGroup;
