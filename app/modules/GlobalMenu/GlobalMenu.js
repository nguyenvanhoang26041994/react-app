import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { omit } from 'lodash/fp';
import cn from 'classnames';
import { withRouter } from 'react-router-dom';
import { Menu, Icon, Grid } from '../../components/core';

const globalMenus = [
  {
    key: 'group-general',
    isSubMenu: true,
    title: 'General',
    children: [
      { key: 'Button', children: 'Button', icon: <Icon icon="hand-pointer" /> },
      { key: 'Icon', children: 'Icon', icon: <Icon icon="eye" /> },
    ],
  },
  {
    key: 'group-layout',
    isSubMenu: true,
    title: 'Layout',
    children: [
      { key: 'Grid', children: 'Grid', icon: <Icon icon="grip-horizontal" /> },
    ],
  },
  {
    key: 'group-navigation',
    isSubMenu: true,
    title: 'Navigation',
    children: [
      { key: 'Menu', children: 'Menu', icon: <Icon icon="bars" /> },
      {
        key: 'Pagination',
        children: 'Pagination',
        icon: <Icon icon="columns" />,
      },
      {
        key: 'Dropdown',
        children: 'Dropdown',
        icon: <Icon icon="angle-right" />,
      },
    ],
  },
  {
    key: 'group-data-entry',
    isSubMenu: true,
    title: 'Data Entry',
    children: [
      { key: 'Checkbox', children: 'Checkbox', icon: <Icon icon="check" /> },
      {
        key: 'Input',
        children: 'Input',
        icon: <Icon icon="keyboard" />,
      },
      {
        key: 'Radio',
        children: 'Radio',
        icon: <Icon icon="circle" />,
      },
      {
        key: 'Select',
        children: 'Select',
        icon: <Icon icon="bolt" />,
      },
      {
        key: 'Switch',
        children: 'Switch',
        icon: <Icon icon="toggle-on" />,
      },
      { key: 'Textarea', children: 'Textarea', icon: <Icon icon="expand" /> },
    ],
  },
  {
    key: 'group-data-display',
    isSubMenu: true,
    title: 'Data Display',
    children: [
      { key: 'Avatar', children: 'Avatar', icon: <Icon icon="user-tie" /> },
      {
        key: 'Tooltip',
        children: 'Tooltip',
        icon: <Icon icon="comment-alt" />,
      },
      {
        key: 'Table',
        children: 'Table',
        icon: <Icon icon="table" />,
      },
      {
        key: 'Tabs',
        children: 'Tabs',
        icon: <Icon icon="tasks" />,
      },
    ],
  },
  {
    key: 'group-message',
    isSubMenu: true,
    title: 'Feedback',
    children: [
      { key: 'Alert', children: 'Alert', icon: <Icon icon="bell" /> },
      { key: 'Modal', children: 'Modal', icon: <Icon icon="box" /> },
      {
        key: 'Popconfirm',
        children: 'Popconfirm',
        icon: <Icon icon="toolbox" />,
      },
    ],
  },
  {
    key: 'group-other',
    isGroupItem: true,
    title: 'Other',
    children: [
      { key: 'Portal', children: 'Portal', icon: <Icon icon="fire" /> },
      { key: 'Divider', children: 'Divider', icon: <Icon icon="heart" /> },
      { key: 'Text', children: 'Text', icon: <Icon icon="font" /> },
      {
        key: 'Sticker',
        children: 'Sticker',
        icon: <Icon icon="sticky-note" />,
      },
    ],
  },
];

const Wrapper = styled(Grid)`
  background-color: #ffffff;
`;

const LogoWrapper = styled(Grid)`
  background-color: #1b1f29;
  z-index: 1;
  position: sticky;
  top: 0;
`;

const StyledMenu = styled(Menu)`
  width: 100%;

  .rc-menu-item {
    background-color: #2d3446;
    color: rgb(120, 129, 149);

    &:hover:not(.rc-menu-item--active):not(.rc-menu-groupitem__title):not(.rc-submenu__title) {
      background-color: #1b1f29;
      color: #ffffff;
    }

    &.rc-submenu__title:hover {
      color: #ffffff;
    }
  }

  .rc-menu-item--active {
    background-color: #1b1f29;
    color: #ffffff;
  }

  .rc-submenu__menu {
    > .rc-menu-item:not(.rc-menu-item--active) {
      background-color: #1f2430;
    }
  }
`;

const renderMenu = menus =>
  menus.map(menu => {
    if (menu.isSubMenu) {
      const { children, ...otherProps } = omit(['isSubMenu', 'isGroupItem'])(
        menu,
      );
      return (
        <Menu.SubMenu {...otherProps}>{renderMenu(children)}</Menu.SubMenu>
      );
    }

    if (menu.isGroupItem) {
      const { children, ...otherProps } = omit(['isSubMenu', 'isGroupItem'])(
        menu,
      );
      return (
        <Menu.GroupItem {...otherProps}>{renderMenu(children)}</Menu.GroupItem>
      );
    }

    return <Menu.Item {...menu} />;
  });

class GlobalMenu extends React.Component {
  state = {};

  handleChangeLocation = activeKey =>
    this.props.history.push(`/document/${activeKey}`);

  render() {
    const { className } = this.props;

    return (
      <Wrapper col className={cn('global-menu', className)}>
        <LogoWrapper className="global-menu__logo" span="full" />
        <StyledMenu onChangeActivekey={this.handleChangeLocation}>
          {renderMenu(globalMenus)}
        </StyledMenu>
      </Wrapper>
    );
  }
}

GlobalMenu.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string,
};
GlobalMenu.defaultProps = {};

export default withRouter(GlobalMenu);
