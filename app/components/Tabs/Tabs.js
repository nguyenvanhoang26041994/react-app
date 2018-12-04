/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Tabs.scss';

class Tabs extends React.PureComponent {
  isControlled = 'activeTab' in this.props;

  defaultActiveTabState = this.isControlled
    ? this.props.activeTab
    : this.props.defaultActiveTab;

  flagTabs = {};

  state = {
    activeTab: this.defaultActiveTabState,
  };

  componentWillReceiveProps(nextProps) {
    if (this.isControlled && nextProps.activeTab !== this.props.activeTab) {
      this.setState({
        activeTab: nextProps.activeTab,
      });
    }
  }

  handleClick = (event, elm) => {
    const { disabled, tab } = elm.props;
    if (disabled) {
      return null;
    }

    return this.isControlled
      ? this.props.onChange(event, tab)
      : this.setState({ activeTab: tab });
  };

  render() {
    const { className, children } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={cn('rc-tabs', className)}>
        <ul className="rc-tabs__navigation">
          {React.Children.map(children, elm => {
            if (!React.isValidElement(elm)) {
              return null;
            }

            return (
              <li
                className={cn('rc-tab', {
                  'rc-tab--active': elm.props.tab === activeTab,
                  'rc-tab--disabled': elm.props.disabled,
                })}
                onClick={event => this.handleClick(event, elm)}
              >
                {elm.props.icon}
                {typeof elm.props.title === 'string' ? (
                  <span>{elm.props.title}</span>
                ) : (
                  elm.props.title
                )}
              </li>
            );
          })}
        </ul>
        {React.Children.map(children, elm => {
          if (!React.isValidElement(elm)) {
            return null;
          }

          if (activeTab !== elm.props.tab) {
            return this.flagTabs[elm.props.tab] && !elm.props.refresh
              ? elm
              : null;
          }

          if (activeTab === elm.props.tab) {
            this.flagTabs[elm.props.tab] = true;
            return React.cloneElement(elm, {
              className: cn(elm.props.className, 'rc-tabs__content--active'),
            });
          }

          return null;
        })}
      </div>
    );
  }
}

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  activeTab: PropTypes.string,
  defaultActiveTab: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any, // Tab or array Tab
};
Tabs.defaultProps = {
  onChange: f => f,
};

export default Tabs;
