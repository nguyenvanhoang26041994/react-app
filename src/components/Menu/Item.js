import React, { useCallback, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Item.scss');

const Item = ({ className, selected, disabled, title, icon, iconOnly, titleOnly, _key, _onItemClick, onItemClick }) => {
  const _onClick = useCallback(() => {
    if (disabled) {
      return;
    }

    if (onItemClick) {
      return onItemClick();
    }

    return _onItemClick(_key, { selected, title, disabled, icon });
  }, [
    _key,
    disabled,
    title,
    onItemClick,
    selected,
    icon,
  ]);

  return (
    <li
      className={cn(
        'rc-menu-item',
        {
          '--selected': selected,
          '--disabled': disabled,
          '--icon-only': iconOnly,
          '--title-only': titleOnly,
        },
        className,
      )}
      onClick={_onClick}
    >
      {icon && <Icon name={icon} className="rc-menu-item-title-icon" />}
      {((iconOnly && titleOnly) || (iconOnly && !icon)) && <span style={{ textTransform: 'uppercase '}}>{title[0]}</span>}
      <span className="rc-menu-item-content">{title}</span>
    </li>
  );
};

Item.displayName = 'Menu.Item';
Item.propTypes = {
  className: PropTypes.string,
  _onItemClick: PropTypes.func, // do not set default, this function will be passed throught from parent
  onItemClick: PropTypes.func, // not set default
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  titleOnly: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.any,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired, // when Item in iconOnly mode, titleOnly will overide icon by first lettter of this value
  _key: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
