import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import { Icon, Menu } from '../../../components/core';

require('./LeftSidebar.scss');

const mapRouter = Object.freeze({
  '/document/form': 'form',
  '/document/badge': 'badge',
  '/document/button': 'button',
  '/document/icon': 'icon',
  '/document/tooltip': 'tooltip',
  '/document/checkbox': 'checkbox',
  '/document/radio': 'radio',
  '/document/switch': 'switch',
  '/document/drawer': 'drawer',
  '/document/modal': 'modal',
  '/document/confirm': 'confirm',
  '/document/alert': 'alert',
  '/document/notification': 'notification',
  '/document/timeline': 'timeline',
  '/document/stepper': 'stepper',
  '/document/tabs': 'tabs',
  '/document/collapse': 'collapse',
  '/document/pagination': 'pagination',
  '/document/rater': 'rater',
  '/document/avatar': 'avatar',
  '/document/chip': 'chip',
  '/document/divider': 'divider',
  '/document/breadcrumb': 'breadcrumb',
  '/document/carousel': 'carousel',
  '/document/menu': 'menu',
  '/document/progress': 'progress',
  '/document/affix': 'affix',
  '/document/textbox': 'textbox',
  '/document/password': 'password',
  '/document/textarea': 'textarea',
  '/document/input-number': 'input-number',
  '/document/anchor': 'anchor',
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
          <Menu
            className="__menu"
            iconOnly={!isExpanded}
            selectedKeys={selectedKeys}
            onItemClick={key => history.push(`/document/${key}`)}
          >
            <Menu.ItemGroup title="POPULAR" key="group-popular">
              <Menu.Item icon="icons" key="icon" title="Icon" />
              <Menu.Item icon="mouse" key="button" title="Button" />
              <Menu.Item icon="keyboard" key="form" title="Form" />
              <Menu.Item icon="table" key="table" title="Table" />
              <Menu.Item icon="scroll" key="drawer" title="Drawer" />
              <Menu.Item icon="browser" key="modal" title="Modal" />
              <Menu.Item icon="list-ul" key="menu" title="Menu" />
              <Menu.Item icon="pager" key="tabs" title="Tabs" />
              <Menu.Item icon="caret-down" key="collapse" title="Collapse" />
            </Menu.ItemGroup>
            <Menu.Sub key="sub-components" title="Components" icon="desktop">
              <Menu.Item key="badge" icon="angle-right" titleOnly title="Badge" />
              <Menu.Item key="checkbox" icon="angle-right" titleOnly title="Checkbox" />
              <Menu.Item key="radio" icon="angle-right" titleOnly title="Radio" />
              <Menu.Item key="switch" icon="angle-right" titleOnly title="Switch" />
              <Menu.Item key="breadcrumb" icon="angle-right" titleOnly title="Breadcrumb" />
              <Menu.Item key="avatar" icon="angle-right" titleOnly title="Avatar" />
              <Menu.Item key="carousel" icon="angle-right" titleOnly title="Carousel" />
              <Menu.Item key="timeline" icon="angle-right" titleOnly title="Timeline" />
              <Menu.Item key="stepper" icon="angle-right" titleOnly title="Stepper" />
              <Menu.Item key="chip" icon="angle-right" titleOnly title="Chip" />
              <Menu.Item key="divider" icon="angle-right" titleOnly title="Divider" />
              <Menu.Item key="pagination" icon="angle-right" titleOnly title="Pagination" />
              <Menu.Item key="progress" icon="angle-right" titleOnly title="Progress" />
              <Menu.Item key="rater" icon="angle-right" titleOnly title="Rater" />
            </Menu.Sub>
            <Menu.Sub title="Form" key="sub-fom" icon="keyboard">
              <Menu.Item icon="angle-right" key="textbox" titleOnly title="Textbox" />
              <Menu.Item icon="angle-right" key="password" titleOnly title="Password" />
              <Menu.Item icon="angle-right" key="textarea" titleOnly title="Textarea" />
              <Menu.Item icon="angle-right" key="input-number" titleOnly title="Input Number" />
              <Menu.Item icon="angle-right" key="select" titleOnly title="Select" />
            </Menu.Sub>
            <Menu.Sub title="Overlay" key="sub-overlay" icon="bell">
              <Menu.Item icon="angle-right" key="affix" titleOnly title="Affix" />
              <Menu.Item icon="angle-right" key="anchor" titleOnly title="Anchor" />
              <Menu.Item icon="angle-right" key="confirm" titleOnly title="Confirm" />
              <Menu.Item icon="angle-right" key="tooltip" titleOnly title="Tooltip" />
              <Menu.Item icon="angle-right" key="alert" titleOnly title="Alert" />
              <Menu.Item icon="angle-right" key="notification" titleOnly title="Notification" />
            </Menu.Sub>
            <Menu.ItemGroup key="group-page" title="PAGES">
              <Menu.Item icon="power-off" key="login-page" titleOnly title="Login Page" />
              <Menu.Item icon="comments" key="error-page" titleOnly title="Error Page" />
              <Menu.Item icon="globe" key="register-page" titleOnly title="Register Page" />
            </Menu.ItemGroup>
            <Menu.Item icon="table" key="calendar" titleOnly title="Calendar" />
            <Menu.Item icon="clock" key="date-licker" titleOnly title="Date Picker" />
            <Menu.Item icon="keyboard" key="editer" titleOnly title="Editer" />
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
