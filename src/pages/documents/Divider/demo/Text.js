import React from 'react';
import { Divider } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider className="my-10" title="DIVIDER TITLE" />
      <Divider className="my-10" dashed title="DIVIDER TITLE" />
      <Divider className="my-10" dotted title="DIVIDER TITLE" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider className="my-10" title="DIVIDER TITLE" />
      <Divider className="my-10" dashed title="DIVIDER TITLE" />
      <Divider className="my-10" dotted title="DIVIDER TITLE" />
    </div>
  );
};
`;

export default Demo;
