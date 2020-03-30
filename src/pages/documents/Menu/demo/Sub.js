import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.Sub key="sub-action" title="Action" icon="ellipsis-h">
        <Menu.Item
          key="copy"
          icon="copy"
          title="Copy"
        />
        <Menu.Item
          key="cog"
          icon="cog"
          title="Config"
        />
        <Menu.Item
          key="comments"
          icon="comments"
          title="Comments"
        />
        <Menu.Item
          key="heart"
          icon="heart"
          title="Love"
        />
      </Menu.Sub>
      <Menu.Sub
        key="sub-other"
        title="Other"
        icon="power-off"
      >
        <Menu.Item
          key="rating"
          icon="star"
          title="Rating"
        />
        <Menu.Item
          key="follow"
          icon="bell"
          title="Follow"
        />
      </Menu.Sub>
    </Menu>
  );
};

Demo.code = `
import React from 'react';
import { Menu } from '../../../../components/core';

const Demo = () => {
  return (
    <Menu>
      <Menu.Sub key="sub-action" title="Action" icon="ellipsis-h">
        <Menu.Item
          key="copy"
          icon="copy"
          title="Copy"
        />
        <Menu.Item
          key="cog"
          icon="cog"
          title="Config"
        />
        <Menu.Item
          key="comments"
          icon="comments"
          title="Comments"
        />
        <Menu.Item
          key="heart"
          icon="heart"
          title="Love"
        />
      </Menu.Sub>
      <Menu.Sub
        key="sub-other"
        title="Other"
        icon="power-off"
      >
        <Menu.Item
          key="rating"
          icon="star"
          title="Rating"
        />
        <Menu.Item
          key="follow"
          icon="bell"
          title="Follow"
        />
      </Menu.Sub>
    </Menu>
  );
};
`;

export default Demo;
