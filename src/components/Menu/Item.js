import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Item.scss');

const Item = ({ className, selected, disabled, children, ...otherProps }) => {
  return (
    <li
      className={cn(
        'rc-menu-item',
        {
          '--selected': selected,
          '--disabled': disabled,
        },
        className,
      )}
      {...otherProps}
    >
      {children}
    </li>
  );
};

Item.displayName = 'Menu.Item';
Item.propTypes = {
  className: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
