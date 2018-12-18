/* eslint-disable no-console, no-alert */
import React from 'react';
import { Grid, Menu, Icon } from '../../components/core';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid row>
        <Menu>
          <Menu.GroupItem title="Group 1" key="g-1">
            <Menu.Item key="menu-1-g">Menu 1</Menu.Item>
            <Menu.Item key="menu-1-1-g">Menu 1</Menu.Item>
            <Menu.Item key="menu-1-2-g">Menu 1</Menu.Item>
          </Menu.GroupItem>
          <Menu.Item key="menu-1" icon={<Icon icon="user" />}>
            Menu 1
          </Menu.Item>
          <Menu.Item key="menu-1-1">Menu 1</Menu.Item>
          <Menu.Item key="menu-1-2" icon>
            Menu 1
          </Menu.Item>
          <Menu.Item key="menu-2" icon={<Icon icon="address-book" />}>
            Menu 2
          </Menu.Item>
          <Menu.Item key="menu-3" icon={<Icon icon="atom" className="mr-2" />}>
            Menu 3
          </Menu.Item>
          <Menu.SubMenu title="SubMenu" key="sub-1">
            <Menu.Item key="menu-9">Menu 9</Menu.Item>
            <Menu.Item
              key="menu-10"
              icon={<Icon icon="align-center" className="mr-2" />}
            >
              Menu 10
            </Menu.Item>
            <Menu.Item key="menu-11">Menu 11</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="SubMenu2" key="sub-2">
            <Menu.Item key="menu-12">Menu 12</Menu.Item>
            <Menu.Item key="menu-13">Menu 13</Menu.Item>
            <Menu.Item key="menu-14">Menu 14</Menu.Item>
            <Menu.GroupItem title="Group 1" key="g-1">
              <Menu.Item key="menu-1-g2">Menu 1</Menu.Item>
              <Menu.Item key="menu-1-1-g4">Menu 1</Menu.Item>
              <Menu.Item key="menu-1-2-g6">Menu 1</Menu.Item>
            </Menu.GroupItem>
          </Menu.SubMenu>
        </Menu>
      </Grid>
    );
  }
}

export default Demo;
