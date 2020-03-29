import React from 'react';
import { Divider, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider className="my-10" title={<Icon name="power-off" />} />
      <Divider className="my-10" dashed title={<Icon name="copy" />} />
      <Divider className="my-10" dotted title={<Icon name="comments" />} />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider, Icon } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider className="my-10" title={<Icon name="power-off" />} />
      <Divider className="my-10" dashed title={<Icon name="copy" />} />
      <Divider className="my-10" dotted title={<Icon name="comments" />} />
    </div>
  );
};
`;

export default Demo;
