import React from 'react';
import cn from 'classnames';

require('./Item.scss');

const Item = ({ icon, name, active, iconOnly, ...otherProps }) => {
  return (
    <div className={cn('left-sidebar-menu-item', { '--active': active, '--icon-only': iconOnly })} {...otherProps}>
      <div className="__icon">{icon}</div>
      <div className="__name">{name}</div>
    </div>
  );
};

export default Item;
