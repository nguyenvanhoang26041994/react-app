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
      <Menu.Item key="option-1" disabled>Disabled Option</Menu.Item>
      <Menu.Item key="option-2">Option Two</Menu.Item>
      <Menu.Item key="option-3" disabled>Disabled Option</Menu.Item>
      <Menu.Item key="option-4">Option Four</Menu.Item>
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
      <Menu.Item key="option-1" disabled>Disabled Option</Menu.Item>
      <Menu.Item key="option-2">Option Two</Menu.Item>
      <Menu.Item key="option-3" disabled>Disabled Option</Menu.Item>
      <Menu.Item key="option-4">Option Four</Menu.Item>
    </Menu>
  );
};
`;

export default Demo;
