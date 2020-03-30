import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon="copy" title="Copy" />
      <Menu.Item key="cog" icon="cog" title="Config" />
      <Menu.Item
        key="comments"
        icon="comments"
        title="Comments"
      />
      <Menu.Item key="heart" icon="heart" title="Love" />
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default () => {
  return (
    <Menu>
      <Menu.Item key="copy" icon="copy" title="Copy" />
      <Menu.Item key="cog" icon="cog" title="Config" />
      <Menu.Item
        key="comments"
        icon="comments" title="Comments"
      />
      <Menu.Item key="heart" icon="heart" title="Love" />
    </Menu>
  );
};
`;

export default Demo;
