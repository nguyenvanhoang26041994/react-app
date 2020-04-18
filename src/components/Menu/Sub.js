import React, { useState, useCallback, useContext, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import MenuContext from './MenuContext';

const Sub = ({ defaultExpanded, className, children, title, icon, _key }) => {
  const { iconOnly, selectedSubKeys } = useContext(MenuContext);
  const selected = useMemo(() => selectedSubKeys.indexOf(_key) >= 0, [selectedSubKeys, _key]);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const toggleExpanded = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <li className={cn('rc-menu-sub', { '--expanded': isExpanded, '--icon-only': iconOnly,'--selected': selected }, className)}>
      <div className="rc-menu-sub-title" onClick={toggleExpanded}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon && <Icon name={icon} className="rc-menu-sub-title-icon" />}
          {(iconOnly && !icon && title) && <span style={{ textTransform: 'uppercase '}}>{title[0]}</span>}
          <span className="rc-menu-sub-content">{title}</span>
        </div>
        <Icon name="caret-down" className="rc-menu-sub-icon" />
      </div>
      <ul className="rc-menu-sub-list">
        {React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
          _subKey: _key,
          _key: elm.hasOwnProperty('key') ? elm.key : idx,
        }))}
      </ul>
    </li>
  );
};

Sub.displayName = 'Menu.Sub';
Sub.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  _key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultExpanded: PropTypes.bool,
};
Sub.defaultProps = {};

export default Sub;
