import React, { useState } from 'react';
import { Menu, Switch } from '../../../../components/core';

const Demo = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isIconOnly, setIsIconOnly] = useState(true);
  /**
   * If you are using Class Component
   * this.state = { selectedKeys: [] };
   * setSelectedKeys = callback => this.setState(prev => callback(prev.selectedKeys));
   * */
  return (
    <div className="flex flex-row items-end justify-start w-full" style={{ height: '40rem' }}>
      <div className="flex items-center mr-20">
        <Switch checked={isIconOnly} onChange={(e) => setIsIconOnly(e.target.checked)} />
        <span className="ml-3">Icon Only</span>
      </div>
      <Menu selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} iconOnly={isIconOnly}>
        <Menu.ItemGroup key="group-action" title="Action">
          <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
          <Menu.Item key="cog" icon="cog">Config</Menu.Item>
          <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
          <Menu.Item key="heart" icon="heart">Love</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="group-other" title="Other">
          <Menu.Item key="rating" icon="star" titleOnly="Rating">Rating</Menu.Item>
          <Menu.Item key="follow" icon="bell" titleOnly="Follow">Follow</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Sub key="sub-order" title="Order" icon="ellipsis-h">
          <Menu.Item key="alarm" icon="clock">Alarm</Menu.Item>
          <Menu.Item key="break-down" icon="caret-down">Break down</Menu.Item>
        </Menu.Sub>
      </Menu>
    </div>
  );
};

Demo.code = `
import React, { useState } from 'react';
import { Menu, Switch } from '@/components/core';

export default () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isIconOnly, setIsIconOnly] = useState(true);
  /**
   * If you are using Class Component
   * this.state = { selectedKeys: [] };
   * setSelectedKeys = callback => this.setState(prev => callback(prev.selectedKeys));
   * */
  return (
    <div className="flex flex-row items-end justify-start w-full" style={{ height: '40rem' }}>
      <div className="flex items-center mr-20">
        <Switch checked={isIconOnly} onChange={(e) => setIsIconOnly(e.target.checked)} />
        <span className="ml-3">Icon Only</span>
      </div>
      <Menu selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} iconOnly={isIconOnly}>
        <Menu.ItemGroup key="group-action" title="Action">
          <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
          <Menu.Item key="cog" icon="cog">Config</Menu.Item>
          <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
          <Menu.Item key="heart" icon="heart">Love</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="group-other" title="Other">
          <Menu.Item key="rating" icon="star" titleOnly="Rating">Rating</Menu.Item>
          <Menu.Item key="follow" icon="bell" titleOnly="Follow">Follow</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Sub key="sub-order" title="Order" icon="ellipsis-h">
          <Menu.Item key="alarm" icon="clock">Alarm</Menu.Item>
          <Menu.Item key="break-down" icon="caret-down">Break down</Menu.Item>
        </Menu.Sub>
      </Menu>
    </div>
  );
};
`;

export default Demo;
