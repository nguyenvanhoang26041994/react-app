import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Icon from '../Icon';

import Item from './Item';

require('./Tabs.scss');

const Tabs = ({ className, children, activeTab, onChange, fluid }) => {
  const tabs = useMemo(() => React.Children.map(children, tab => ({
    key: tab.key,
    title: tab.props.title,
    disabled: tab.props.disabled,
    icon: tab.props.icon,
  })), [children]);

  return (
    <div className={cn('rc-tabs', { '--fluid': fluid }, className)}>
      <ButtonGroup className="rc-tabs-nav" fluid={fluid}>
        {tabs.map(tab => (
          <Button
            key={tab.key}
            className={cn('rc-tabs-nav-item', { '--active': activeTab === tab.key })}
            pressed={activeTab !== tab.key}
            disabled={tab.disabled}
            onClick={() => onChange(tab.key)}
          >
            {tab.icon && <Icon name={tab.icon} style={{ marginRight: '1em' }} />}
            {tab.title}
          </Button>
        ))}
      </ButtonGroup>
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
