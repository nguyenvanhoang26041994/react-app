import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Sub.scss');

const Sub = ({ className, children, title, icon, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <li className={cn('rc-menu-sub', { '--expanded': isExpanded })}>
      <div className="rc-menu-sub-title" onClick={toggleExpanded}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon && <Icon name={icon} className="rc-menu-sub-title-icon" />}
          <span>{title}</span>
        </div>
        <Icon name="caret-down" className="rc-menu-sub-icon" />
      </div>
      <ul className="rc-menu-sub-list">
        {children}
      </ul>
    </li>
  );
};

Sub.displayName = 'Menu.Sub';
Sub.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Sub.defaultProps = {};

export default Sub;
