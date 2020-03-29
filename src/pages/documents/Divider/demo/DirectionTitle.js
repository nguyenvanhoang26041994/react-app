import React from 'react';
import { Divider, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider className="my-10" dashed left title={<Icon name="power-off" />} />
      <Divider className="my-10" direction="left" title="LEFT TITLE" />
      <Divider className="my-10" dashed right title={<Icon name="copy" />} />
      <Divider
        type="dashed"
        className="my-10"
        direction="right"
        title={<span><Icon name="copy" className="mr-3" />RIGHT TITLE</span>}
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
      <Divider className="my-10" dashed left title={<Icon name="power-off" />} />
      <Divider className="my-10" direction="left" title="LEFT TITLE" />
      <Divider className="my-10" dashed right title={<Icon name="copy" />} />
      <Divider
        type="dashed"
        className="my-10"
        direction="right"
        title={<span><Icon name="copy" className="mr-3" />RIGHT TITLE</span>}
      />
    </div>
  );
};
`;

export default Demo;
