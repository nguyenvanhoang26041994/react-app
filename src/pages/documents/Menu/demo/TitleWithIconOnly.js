import React, { useState } from 'react';
import { Menu, Switch } from '../../../../components/core';

const Demo = () => {
  const [isIconOnly, setIsIconOnly] = useState(true);
  return (
    <div
      className="flex flex-row items-end justify-start w-full"
      style={{ height: '40rem' }}
    >
      <div className="flex items-center mr-20">
        <Switch
          checked={isIconOnly}
          onChange={(e) => setIsIconOnly(e.target.checked)}
        />
        <span className="ml-3">Icon Only</span>
      </div>
      <Menu iconOnly={isIconOnly}>
        <Menu.ItemGroup key="group-action" title="Action">
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
          <Menu.Item key="heart" icon="heart" title="Love" />
        </Menu.ItemGroup>
        <Menu.ItemGroup key="group-other" title="Other">
          <Menu.Item
            key="rating"
            icon="star"
            titleOnly
            title="Rating"
          />
          <Menu.Item
            key="follow"
            icon="bell"
            titleOnly
            title="Follow"
          />
        </Menu.ItemGroup>
        <Menu.Sub
          key="sub-order"
          title="Order"
          icon="ellipsis-h"
        >
          <Menu.Item
            key="alarm"
            icon="clock"
            title="Alarm"
          />
          <Menu.Item
            key="break-down"
            icon="caret-down"
            title="Break down"
          />
        </Menu.Sub>
      </Menu>
    </div>
  );
};

Demo.code = `
import React, { useState } from 'react';
import { Menu, Switch } from '@/components/core';

export default () => {
  const [isIconOnly, setIsIconOnly] = useState(true);
  return (
    <div
      className="flex flex-row items-end justify-start w-full"
      style={{ height: '40rem' }}
    >
      <div className="flex items-center mr-20">
        <Switch
          checked={isIconOnly}
          onChange={(e) => setIsIconOnly(e.target.checked)}
        />
        <span className="ml-3">Icon Only</span>
      </div>
      <Menu iconOnly={isIconOnly}>
        <Menu.ItemGroup key="group-action" title="Action">
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
          <Menu.Item key="heart" icon="heart" title="Love" />
        </Menu.ItemGroup>
        <Menu.ItemGroup key="group-other" title="Other">
          <Menu.Item
            key="rating"
            icon="star"
            titleOnly
            title="Rating"
          />
          <Menu.Item
            key="follow"
            icon="bell"
            titleOnly
            title="Follow"
          />
        </Menu.ItemGroup>
        <Menu.Sub
          key="sub-order"
          title="Order"
          icon="ellipsis-h"
        >
          <Menu.Item
            key="alarm"
            icon="clock"
            title="Alarm"
          />
          <Menu.Item
            key="break-down"
            icon="caret-down"
            title="Break down"
          />
        </Menu.Sub>
      </Menu>
    </div>
  );
};
`;

export default Demo;
