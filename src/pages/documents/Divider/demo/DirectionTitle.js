import React from 'react';
import { Divider, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider dashed left title={<Icon name="power-off" />} />
      <Divider direction="left" title="LEFT TITLE" />
      <Divider dashed right title={<Icon name="copy" />} />
      <Divider
        type="dashed"
        direction="right"
        title={(
          <span>
            <Icon name="copy" className="mr-3" />
            RIGHT TITLE
          </span>
        )}
      />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider, Icon } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider dashed left title={<Icon name="power-off" />} />
      <Divider direction="left" title="LEFT TITLE" />
      <Divider dashed right title={<Icon name="copy" />} />
      <Divider
        type="dashed"
        direction="right"
        title={(
          <span>
            <Icon name="copy" className="mr-3" />
            RIGHT TITLE
          </span>
        )}
      />
    </div>
  );
};
`;

export default Demo;
