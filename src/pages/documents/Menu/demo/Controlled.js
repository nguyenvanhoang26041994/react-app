import React, { useState, useCallback } from 'react';
import { Menu, Divider } from '../../../../components/core';

const Demo = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onItemClick = useCallback(key => setSelectedKeys([key]));

  return (
    <div>
      <Menu selectedKeys={selectedKeys}>
        <Menu.Item
          key="option-1"
          onItemClick={() => onItemClick('option-1')}
          title="Option One"
        />
        <Menu.Item
          key="option-2"
          onItemClick={() => onItemClick('option-2')}
          title="Option Two"
        />
        <Menu.Item
          key="option-3"
          onItemClick={() => onItemClick('option-3')}
          title="Option Three"
        />
        <Menu.Item
          key="option-4"
          onItemClick={() => onItemClick('option-4')}
          title="Option Four"
        />
      </Menu>
      <Divider dashed title="OTHER WAY" />
      <Menu selectedKeys={selectedKeys} onItemClick={onItemClick}>
        <Menu.Item key="option-1" title="Option One" />
        <Menu.Item key="option-2" title="Option Two" />
        <Menu.Item key="option-3" title="Option Three" />
        <Menu.Item key="option-4" title="Option Four" />
      </Menu>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Menu, Divider } from '@/components/core';

export default () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const onItemClick = useCallback(key => setSelectedKeys([key]));

  return (
    <div>
      <Menu selectedKeys={selectedKeys}>
        <Menu.Item
          key="option-1"
          onItemClick={() => onItemClick('option-1')}
          title="Option One"
        />
        <Menu.Item
          key="option-2"
          onItemClick={() => onItemClick('option-2')}
          title="Option Two"
        />
        <Menu.Item
          key="option-3"
          onItemClick={() => onItemClick('option-3')}
          title="Option Three"
        />
        <Menu.Item
          key="option-4"
          onItemClick={() => onItemClick('option-4')}
          title="Option Four"
        />
      </Menu>
      <Divider dashed title="OTHER WAY" />
      <Menu selectedKeys={selectedKeys} onItemClick={onItemClick}>
        <Menu.Item key="option-1" title="Option One" />
        <Menu.Item key="option-2" title="Option Two" />
        <Menu.Item key="option-3" title="Option Three" />
        <Menu.Item key="option-4" title="Option Four" />
      </Menu>
    </div>
  );
};
`;

export default Demo;
