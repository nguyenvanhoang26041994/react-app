import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy" title="Copy" />
        <Menu.Item key="cog" icon="cog" title="Config" />
        <Menu.Item
          key="comments"
          icon="comments"
          title="Comments"
        />
        <Menu.Item key="heart" icon="heart" title="Love" />
      </Menu.ItemGroup>
      <Menu.ItemGroup key="group-other" title="Other">
        <Menu.Item key="rating" icon="star" title="Rating" />
        <Menu.Item key="follow" icon="bell" title="Follow" />
      </Menu.ItemGroup>
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '@/components/core';

export default = () => {
  return (
    <Menu>
      <Menu.ItemGroup key="group-action" title="Action">
        <Menu.Item key="copy" icon="copy" title="Copy" />
        <Menu.Item key="cog" icon="cog" title="Config" />
        <Menu.Item
          key="comments"
          icon="comments"
          title="Comments"
        />
        <Menu.Item key="heart" icon="heart" title="Love" />
      </Menu.ItemGroup>
      <Menu.ItemGroup key="group-other" title="Other">
        <Menu.Item key="rating" icon="star" title="Rating" />
        <Menu.Item key="follow" icon="bell" title="Follow" />
      </Menu.ItemGroup>
    </Menu>
  );
};
`;

export default Demo;
