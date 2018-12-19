/* eslint-disable no-console, no-alert */
import React from 'react';
import { Dropdown, Button, Menu, Grid, Icon } from '../../components/core';
import { withDropdown } from '../../components/HOC';

const ButtonEnhance = withDropdown(Button);

class Demo extends React.Component {
  state = {};

  overlay = (
    <Menu onChangeActivekey={activeKey => console.log(activeKey)}>
      <Menu.Item key="1" icon={<Icon icon="atom" />}>
        Menu.Item 1
      </Menu.Item>
      <Menu.GroupItem key="gg-1" title="Group1">
        <Menu.Item key="2">Menu.Item 2</Menu.Item>
        <Menu.Item key="3">Menu.Item 3</Menu.Item>
        <Menu.Item key="4">Menu.Item 4</Menu.Item>
      </Menu.GroupItem>
      <Menu.Item key="2">Menu.Item 2</Menu.Item>
      <Menu.Item key="3">Menu.Item 3</Menu.Item>
      <Menu.Item key="4">Menu.Item 4</Menu.Item>
      <Menu.SubMenu title="Group2" key="g-2">
        <Menu.Item key="5">Menu.Item 5</Menu.Item>
        <Menu.Item key="6">Menu.Item 6</Menu.Item>
        <Menu.Item key="7">Menu.Item 7</Menu.Item>
        <Menu.Item key="8">Menu.Item 8</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu mode="split" title="Group1" key="g-1">
        <Menu.Item key="9">Menu.Item 9</Menu.Item>
        <Menu.Item key="10">Menu.ItemItem 10</Menu.Item>
        <Menu.Item key="11">Menu.Item 11</Menu.Item>
        <Menu.Item key="12">Menu.Item 12</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );

  textRef = React.createRef();

  onButtonClick = () => {
    console.log(this.textRef);
  };

  render() {
    return (
      <Grid col items="center">
        <Grid className="p-8">
          <ButtonEnhance
            color="success"
            dropdownProps={{
              overlay: this.overlay,
            }}
          >
            withDropdown Button
          </ButtonEnhance>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="top" overlay={this.overlay}>
            <Button size="large" color="primary">
              top
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="bottom" overlay={this.overlay}>
            <Button size="large" color="primary">
              bottom
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="left" overlay={this.overlay}>
            <Button size="large" color="primary">
              left
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="right" overlay={this.overlay}>
            <Button size="large" color="primary">
              right
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="top-left" overlay={this.overlay}>
            <Button size="large" color="primary">
              top-left
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="top-right" overlay={this.overlay}>
            <Button size="large" color="primary">
              top-right
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="bottom-left" overlay={this.overlay}>
            <Button size="large" color="primary">
              bottom-left
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="bottom-right" overlay={this.overlay}>
            <Button size="large" color="primary">
              bottom-right
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="left-top" overlay={this.overlay}>
            <Button size="large" color="primary">
              left-top
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="left-bottom" overlay={this.overlay}>
            <Button size="large" color="primary">
              left-bottom
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="right-top" overlay={this.overlay}>
            <Button size="large" color="primary">
              right-top
            </Button>
          </Dropdown>
        </Grid>
        <Grid className="p-8">
          <Dropdown placement="right-bottom" overlay={this.overlay}>
            <Button size="large" color="primary">
              right-bottom
            </Button>
          </Dropdown>
        </Grid>
        <Grid style={{ height: '1000px' }} />
      </Grid>
    );
  }
}

export default Demo;
