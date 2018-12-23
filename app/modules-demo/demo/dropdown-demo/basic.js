import React from 'react';
import { Dropdown, Button, Grid, Menu } from '../../../components/core';

const overlay = (
  <Menu defaultShow>
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
);

export default () => (
  <Grid row>
    <Dropdown overlay={overlay} placement="top">
      <Button>top</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="top-right">
      <Button className="ml-5">top-right</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="right-top">
      <Button className="ml-5">right-top</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="right">
      <Button className="ml-5">right</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="right-bottom">
      <Button className="ml-5">right-bottom</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="bottom-right">
      <Button className="ml-5">bottom-right</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="bottom">
      <Button className="ml-5">bottom</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="bottom-left">
      <Button className="ml-5">bottom-left</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="left-bottom">
      <Button className="ml-5">left-bottom</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="left">
      <Button className="ml-5">left</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="left-top">
      <Button className="ml-5">left-top</Button>
    </Dropdown>
    <Dropdown overlay={overlay} placement="top-left">
      <Button className="ml-5">top-left</Button>
    </Dropdown>
  </Grid>
);
