import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Sub.scss');

const Sub = ({ className, children, title, icon, iconOnly, selectedKeys, setSelectedKeys, onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <li className={cn('rc-menu-sub', { '--expanded': isExpanded, '--icon-only': iconOnly }, className)}>
      <div className="rc-menu-sub-title" onClick={toggleExpanded}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon && <Icon name={icon} className="rc-menu-sub-title-icon" />}
          <span className="rc-menu-sub-content">{title}</span>
        </div>
        <Icon name="caret-down" className="rc-menu-sub-icon" />
      </div>
      <ul className="rc-menu-sub-list">
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

Sub.displayName = 'Menu.Sub';
Sub.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  selectedKeys: PropTypes.array,
  setSelectedKeys: PropTypes.setSelectedKeys,
};
Sub.defaultProps = {
  selectedKeys: [],
  setSelectedKeys: f => f,
};

export default Sub;
