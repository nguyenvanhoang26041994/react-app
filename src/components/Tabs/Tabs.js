import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Item from './Item';

require('./Tabs.scss');

const renderIcon = (icon, right) => {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return (
      <Icon
        name={icon}
        style={right ? {
          marginLeft: '1em',
        } : {
          marginRight: '1em',
        }}
      />
    )
  }

  return icon;
};

const Tabs = ({ className, children, activeTab, onChange, fluid }) => {
  const tabs = useMemo(() => React.Children.map(children, tab => ({
    key: tab.key,
    title: tab.props.title,
    disabled: tab.props.disabled,
    icon: tab.props.icon,
    iconRight: tab.props.iconRight,
  })), [children]);

  return (
    <div className={cn('rc-tabs', { '--fluid': fluid }, className)}>
      <div className="rc-tabs-nav-container">
        <div className="rc-tabs-nav">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={cn('rc-tabs-nav-item', { '--active': activeTab === tab.key })}
              disabled={tab.disabled}
              onClick={() => onChange(tab.key)}
            >
              {renderIcon(tab.icon)}
              {tab.title}
              {renderIcon(tab.iconRight, true)}
            </button>
          ))}
        </div>
      </div>
      <div className="rc-tabs-contents">
        {React.Children.map(children, elm => React.cloneElement(elm, { active: activeTab === elm.key }))}
      </div>
    </div>
  );
}

Tabs.Item = Item;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
  fluid: PropTypes.bool,
};
Tabs.defaultProps = {
  onChange: f => f,
};

export default Tabs;
