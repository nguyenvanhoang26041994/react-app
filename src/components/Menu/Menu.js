import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

require('./Menu.scss');

const Menu = ({ className, children }) => {
  const handleOptionSelected = useCallback(() => {}, []);

  return (
    <ul className={cn('rc-menu', className)}>
      {React.Children.map(children, elm => React.cloneElement(elm, {
        // onClick: () => handleOptionSelected(elm.props.name),
        ...elm.props
      }))}
    </ul>
  );
};

Menu.Item = Item;

Menu.displayName = 'Menu';
Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Menu.defaultProps = {};

export default Menu;
