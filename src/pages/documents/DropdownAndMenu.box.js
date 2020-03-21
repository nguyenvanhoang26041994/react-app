import React, { useState } from 'react';
import cn from 'classnames';
import { Dropdown, Button, Progress, Menu } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  const [value, setValue] = useState('Button');
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center flex-wrap" header="DROPDOWN & MENU">
      <Dropdown
        overlay={(
          <Menu>
            <Menu.Item name="menu-1" onClick={() => setValue('Menu One')}>Menu One</Menu.Item>
            <Menu.Item name="menu-2" onClick={() => setValue('Menu Two')}>Menu Two</Menu.Item>
            <Menu.Item name="menu-3" onClick={() => setValue('Menu Three')}>Menu Three</Menu.Item>
            <Menu.Item name="menu-4" onClick={() => setValue('Menu Four')}>Menu Four</Menu.Item>
            <Menu.Item name="menu-5" onClick={() => setValue('Menu Five')}>Menu Five</Menu.Item>
            <Menu.Item name="menu-6" onClick={() => setValue('Menu Six')}>Menu Six</Menu.Item>
            <Menu.Item name="menu-7" onClick={() => setValue('Menu Seven')}>Menu Seven</Menu.Item>
            <Menu.Item name="menu-8" onClick={() => setValue('Menu Eigth')}>Menu Eigth</Menu.Item>
            <Menu.Item name="menu-9" onClick={() => setValue('Menu Nine')}>Menu Nine</Menu.Item>
            <Menu.Item name="menu-10" onClick={() => setValue('Menu Ten')}>Menu Ten</Menu.Item>
            <Menu.Item name="menu-11" onClick={() => setValue('Menu Elevent')}>Menu Elevent</Menu.Item>
          </Menu>
        )}
        placement="bottom-right"
      >
        <Button className="mr-2" style={{ width: '10em' }} pressed>{value}</Button>
      </Dropdown>
      <Dropdown
        overlay={(
          <Menu>
            <Menu.Item name="menu-1" onClick={() => setValue('Menu One')}>Menu One</Menu.Item>
            <Menu.Item name="menu-2" onClick={() => setValue('Menu Two')}>Menu Two</Menu.Item>
            <Menu.Item name="menu-3" onClick={() => setValue('Menu Three')}>Menu Three</Menu.Item>
            <Menu.Item name="menu-4" onClick={() => setValue('Menu Four')}>Menu Four</Menu.Item>
            <Menu.Item name="menu-5" onClick={() => setValue('Menu Five')}>Menu Five</Menu.Item>
            <Menu.Item name="menu-6" onClick={() => setValue('Menu Six')}>Menu Six</Menu.Item>
            <Menu.Item name="menu-7" onClick={() => setValue('Menu Seven')}>Menu Seven</Menu.Item>
            <Menu.Item name="menu-8" onClick={() => setValue('Menu Eigth')}>Menu Eigth</Menu.Item>
            <Menu.Item name="menu-9" onClick={() => setValue('Menu Nine')}>Menu Nine</Menu.Item>
            <Menu.Item name="menu-10" onClick={() => setValue('Menu Ten')}>Menu Ten</Menu.Item>
            <Menu.Item name="menu-11" onClick={() => setValue('Menu Elevent')}>Menu Elevent</Menu.Item>
          </Menu>
        )}
        placement="bottom-left"
      >
        <Button className="mr-2" pressed>{value}</Button>
      </Dropdown>
    </PracticeBox>
  );
};
