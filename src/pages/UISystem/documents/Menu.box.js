import React, { useState } from 'react';
import cn from 'classnames';
import { Menu, Icon } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';
export default ({ className }) => {

  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2" header="MENU">
        <Menu>
          <Menu.ItemGroup key="group-1" title="Group One">
            <Menu.Item key="menu-1" icon="home">
              Menu One
            </Menu.Item>
            <Menu.Item key="menu-2" icon="power-off">
              Menu Two
            </Menu.Item>
            <Menu.Item key="menu-3" icon="comments">
              Menu Three
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.Sub key="sub-1" title="Sub Title One" icon="copy">
            <Menu.Item key="menu-7" icon="cog">Menu Seven</Menu.Item>
            <Menu.Item key="menu-8" icon="table">Menu Eight</Menu.Item>
          </Menu.Sub>
          <Menu.ItemGroup key="group-2" title="Group Two">
            <Menu.Item key="menu-4" icon="bars">
              Menu Four
            </Menu.Item>
            <Menu.Item key="menu-5" icon="heart">
              Menu Five
            </Menu.Item>
            <Menu.Item key="menu-6" icon="bell">
              Menu Six
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </PracticeBox>
    </div>
  );
};
