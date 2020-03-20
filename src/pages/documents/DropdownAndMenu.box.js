import React from 'react';
import cn from 'classnames';
import { Dropdown, Button, Progress, Menu } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center flex-wrap" header="DROPDOWN & MENU">
      <Dropdown
        overlay={(
          <Menu>
            <Menu.Item name="menu-1">Menu One</Menu.Item>
            <Menu.Item name="menu-2">Menu Two</Menu.Item>
            <Menu.Item name="menu-3">Menu Three</Menu.Item>
          </Menu>
        )}
        placement="bottom-right"
        trigger={['click']}
      >
        <Button className="mr-2">Buttom</Button>
      </Dropdown>
      <Dropdown
        overlay={(
          <Menu>
            <Menu.Item name="menu-1">Menu One</Menu.Item>
            <Menu.Item name="menu-2">Menu Two</Menu.Item>
            <Menu.Item name="menu-3">Menu Three</Menu.Item>
          </Menu>
        )}
        placement="bottom-left"
      >
        <Button>Bottom Left</Button>
      </Dropdown>
    </PracticeBox>
  );
};
