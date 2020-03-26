import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Item.scss');

const Item = ({ className, selected, disabled, children, icon, iconOnly, ...otherProps }) => {
  return (
    <li
      className={cn(
        'rc-menu-item',
        {
          '--selected': selected,
          '--disabled': disabled,
          '--icon-only': iconOnly,
        },
        className,
      )}
      {...otherProps}
    >
      {icon && <Icon name={icon} className="rc-menu-item-title-icon" />}
      <span className="rc-menu-item-content">{children}</span>
    </li>
  );
};

Item.displayName = 'Menu.Item';
Item.propTypes = {
  className: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
