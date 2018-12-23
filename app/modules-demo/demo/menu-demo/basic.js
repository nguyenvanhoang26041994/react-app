import React from 'react';

import { Menu, Grid } from '../../../components/core';

export default class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid
        row
        width="full"
        style={{
          backgroundColor: 'aliceblue',
          paddingTop: '1rem',
          paddingBottom: '1rem',
        }}
      >
        <Menu className="ml-5">
          <Menu.Item key="item-1">Item 1</Menu.Item>
          <Menu.Item key="item-2">Item 2</Menu.Item>
          <Menu.Item key="item-3">Item 3</Menu.Item>
        </Menu>
        <Menu className="ml-5">
          <Menu.GroupItem label="Group 1">
            <Menu.Item key="item-1">Item 1</Menu.Item>
            <Menu.Item key="item-2">Item 2</Menu.Item>
            <Menu.Item key="item-3">Item 3</Menu.Item>
          </Menu.GroupItem>
          <Menu.GroupItem label="Group 2">
            <Menu.Item key="item-4">Item 4</Menu.Item>
            <Menu.Item key="item-5">Item 5</Menu.Item>
            <Menu.Item key="item-6">Item 6</Menu.Item>
          </Menu.GroupItem>
        </Menu>
        <Menu className="ml-5">
          <Menu.SubMenu label="SubMenu 1">
            <Menu.Item key="item-1">Item 1</Menu.Item>
            <Menu.Item key="item-2">Item 2</Menu.Item>
            <Menu.Item key="item-3">Item 3</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu label="SubMenu 2">
            <Menu.Item key="item-4">Item 4</Menu.Item>
            <Menu.Item key="item-5">Item 5</Menu.Item>
            <Menu.Item key="item-6">Item 6</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <Menu className="ml-5">
          <Menu.GroupItem label="GroupItem 1">
            <Menu.Item key="item-1">Item 1</Menu.Item>
            <Menu.Item key="item-2">Item 2</Menu.Item>
            <Menu.Item key="item-3">Item 3</Menu.Item>
          </Menu.GroupItem>
          <Menu.SubMenu label="SubMenu 2">
            <Menu.Item key="item-4">Item 4</Menu.Item>
            <Menu.Item key="item-5">Item 5</Menu.Item>
            <Menu.Item key="item-6">Item 6</Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <Menu className="ml-5">
          <Menu.GroupItem label="GroupItem 1">
            <Menu.Item key="item-1">Item 1</Menu.Item>
            <Menu.Item key="item-2">Item 2</Menu.Item>
            <Menu.SubMenu label="SubMenu 2.1">
              <Menu.Item key="item-4.1">Item 4.1</Menu.Item>
              <Menu.Item key="item-5.1">Item 5.1</Menu.Item>
              <Menu.Item key="item-6.1">Item 6.1</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="item-3">Item 3</Menu.Item>
          </Menu.GroupItem>
          <Menu.SubMenu label="SubMenu 2">
            <Menu.Item key="item-4">Item 4</Menu.Item>
            <Menu.Item key="item-5">Item 5</Menu.Item>
            <Menu.Item key="item-6">Item 6</Menu.Item>
            <Menu.GroupItem label="GroupItem 35">
              <Menu.Item key="item-4.2">Item 4.2</Menu.Item>
              <Menu.Item key="item-5.2">Item 5.2</Menu.Item>
              <Menu.Item key="item-6.2">Item 6.2</Menu.Item>
            </Menu.GroupItem>
          </Menu.SubMenu>
        </Menu>
      </Grid>
    );
  }
}
