import React, { useState } from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  /**
   * If you are using Class Component
   * this.state = { selectedKeys: [] };
   * setSelectedKeys = callback => this.setState(prev => callback(prev.selectedKeys));
   * */
  return (
    <Menu selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys}>
      <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
      <Menu.Item key="cog" icon="cog">Config</Menu.Item>
      <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
      <Menu.Item key="heart" icon="heart">Love</Menu.Item>
    </Menu>
  );
};

Demo.code = `
import React, { useState } from 'react';
import { Menu } from '@/components/core';

export default = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  /**
   * If you are using Class Component
   * this.state = { selectedKeys: [] };
   * setSelectedKeys = callback => this.setState(prev => callback(prev.selectedKeys));
   * */
  return (
    <Menu selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys}>
      <Menu.Item key="copy" icon="copy">Copy</Menu.Item>
      <Menu.Item key="cog" icon="cog">Config</Menu.Item>
      <Menu.Item key="comments" icon="comments">Comments</Menu.Item>
      <Menu.Item key="heart" icon="heart">Love</Menu.Item>
    </Menu>
  );
};
`;

export default Demo;
