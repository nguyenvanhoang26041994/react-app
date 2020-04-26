import React, { useMemo, useEffect, useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Item from './Item';

const renderIcon = (icon, right) => {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return (
      <Icon
        name={icon}
        className={cn({
          '--icon-left': !right,
          '--icon-right': right,
        })}
      />
    );
  }

  return icon;
};

const Tabs = ({ className, children, onChange, fluid, underline, uppercase, ...otherProps }) => {
  const tabs = useMemo(() => React.Children.map(children, tab => ({
    key: tab.key,
    title: tab.props.title,
    disabled: tab.props.disabled,
    icon: tab.props.icon,
    iconRight: tab.props.iconRight,
  })), [children]);

  const isControlled = useMemo(() => otherProps.hasOwnProperty('activeTab'), [otherProps]);
  const [activeTab, setActiveTab] = useState(isControlled ? otherProps.activeTab : otherProps.defaultActiveTab);

  useMemo(() => {
    if (!isControlled && !otherProps.defaultActiveTab && tabs.length ) {
      setActiveTab(tabs[0].key);
    }
  } , []);

  const _onChange = useCallback((tabKey) => {
    if (isControlled) {
      return onChange(tabKey);
    }

    return setActiveTab(tabKey);
  }, [isControlled, onChange, setActiveTab]);

  useMemo(() => {
    if (isControlled) {
      return setActiveTab(otherProps.activeTab)
    }
  }, [isControlled, otherProps.activeTab, setActiveTab]);

  useEffect(() => {
    if (!isControlled) {
      onChange(activeTab);
    }
  } ,[activeTab, isControlled]);

  return (
    <div
      className={cn(
        'rc-tabs',
        {
          '--fluid': fluid,
          '--underline': underline,
          '--uppercase': uppercase
        },
        className
      )}
    >
      <div className="rc-tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={cn(
              'rc-tabs-nav-item',
              {
                '--active': activeTab === tab.key,
              }
            )}
            disabled={tab.disabled}
            onClick={() => _onChange(tab.key)}
          >
            {renderIcon(tab.icon)}
            {tab.title}
            {renderIcon(tab.iconRight, true)}
          </button>
        ))}
        <button className="rc-tabs-nav-item --rest " />
      </div>
      <div className="rc-tabs-contents">
        {React.Children.map(children, elm => React.cloneElement(elm, { active: activeTab === elm.key }))}
      </div>
    </div>
  );
};

Tabs.Item = Item;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
  fluid: PropTypes.bool,
  underline: PropTypes.bool,
  uppercase: PropTypes.bool,
};
Tabs.defaultProps = {
  onChange: f => f,
  uppercase: true,
};

export default Tabs;
