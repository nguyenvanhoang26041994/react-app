import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import { Icon, Menu } from '../../../components/core';

require('./LeftSidebar.scss');

const mapRouter = Object.freeze({
  '/document/button': 'button',
  '/document/icon': 'icon',
  '/document/tooltip': 'tooltip',
  '/document/checkbox': 'checkbox',
  '/document/radio': 'radio',
  '/document/switch': 'switch',
  '/document/drawer': 'drawer',
  '/document/modal': 'modal',
  '/document/confirm': 'confirm',
});

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  const selectedKeys = useMemo(() => [mapRouter[location.pathname]], [location.pathname]);

  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className={cn('left-sidebar-wrapper', { '--expanded': isExpanded } )}>
        <div className={cn('left-sidebar', { '--expanded': isExpanded } )} {...otherProps}>
          <div className="__logo">
            <Icon name="home" style={{ fontSize: '1.75rem' }} onClick={() => history.push('/')} />
          </div>
          <Menu className="__menu" iconOnly={!isExpanded} selectedKeys={selectedKeys}>
            <Menu.ItemGroup title="POPULAR" key="group-popular">
              <Menu.Item icon="icons" key="icon" onClick={() => history.push('/document/icon')}>Icon</Menu.Item>
              <Menu.Item icon="mouse" key="button" onClick={() => history.push('/document/button')}>Button</Menu.Item>
              <Menu.Item icon="table" key="table">Table</Menu.Item>
              <Menu.Item icon="scroll" key="drawer" onClick={() => history.push('/document/drawer')}>Drawer</Menu.Item>
              <Menu.Item icon="browser" key="modal" onClick={() => history.push('/document/modal')}>Modal</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Sub key="sub-components" title="Components" icon="desktop">
              <Menu.Item key="checkbox" icon="angle-right" onClick={() => history.push('/document/checkbox')}>Checkbox</Menu.Item>
              <Menu.Item key="radio" icon="angle-right" onClick={() => history.push('/document/radio')}>Radio</Menu.Item>
              <Menu.Item key="swicth" icon="angle-right" onClick={() => history.push('/document/switch')}>Swicth</Menu.Item>
              <Menu.Item key="breadcrumb" icon="angle-right">Breadcrumb</Menu.Item>
              <Menu.Item key="avatar" icon="angle-right">Avatar</Menu.Item>
              <Menu.Item key="carousel" icon="angle-right">Carousel</Menu.Item>
              <Menu.Item key="timeline" icon="angle-right">Timeline</Menu.Item>
              <Menu.Item key="stepper" icon="angle-right">Stepper</Menu.Item>
              <Menu.Item key="tabs" icon="angle-right">Tabs</Menu.Item>
              <Menu.Item key="chip" icon="angle-right">Chip</Menu.Item>
              <Menu.Item key="divider" icon="angle-right">Divider</Menu.Item>
              <Menu.Item key="collapse" icon="angle-right">Collapse</Menu.Item>
              <Menu.Item key="menu" icon="angle-right">Menu</Menu.Item>
              <Menu.Item key="pagination" icon="angle-right">Pagination</Menu.Item>
              <Menu.Item key="progress" icon="angle-right">Progress</Menu.Item>
              <Menu.Item key="rating" icon="angle-right">Rating</Menu.Item>
            </Menu.Sub>
            <Menu.Sub title="Form" key="sub-fom" icon="keyboard">
              <Menu.Item icon="angle-right" key="textbox">Textbox</Menu.Item>
              <Menu.Item icon="angle-right" key="password">Password</Menu.Item>
              <Menu.Item icon="angle-right" key="textarea">Textarea</Menu.Item>
              <Menu.Item icon="angle-right" key="select">Select</Menu.Item>
            </Menu.Sub>
            <Menu.Sub title="Overlay" key="sub-overlay" icon="bell">
              <Menu.Item icon="angle-right" key="confirm" onClick={() => history.push('/document/confirm')}>Confirm</Menu.Item>
              <Menu.Item icon="angle-right" key="tooltip" onClick={() => history.push('/document/tooltip')}>Tooltip</Menu.Item>
              <Menu.Item icon="angle-right" key="alert">Alert</Menu.Item>
              <Menu.Item icon="angle-right" key="notification">Notification</Menu.Item>
            </Menu.Sub>
            <Menu.ItemGroup key="group-page" title="PAGES">
              <Menu.Item icon="power-off" key="login-page">Login Page</Menu.Item>
              <Menu.Item icon="comments" key="error-page">Error Page</Menu.Item>
              <Menu.Item icon="globe" key="register-page">Register Page</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Item icon="table" key="calendar">Calendar</Menu.Item>
            <Menu.Item icon="clock" key="date-licker">Date Picker</Menu.Item>
            <Menu.Item icon="keyboard" key="editer">Editer</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
