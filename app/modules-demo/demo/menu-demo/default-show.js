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
        <Menu defaultShow className="ml-5">
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
      </Grid>
    );
  }
}
