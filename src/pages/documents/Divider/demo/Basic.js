import React from 'react';
import { Divider } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider className="my-10" />
      <Divider className="my-10" dashed />
      <Divider className="my-10" type="dashed" />
      <Divider className="my-10" dotted />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider className="my-10" />
      <Divider className="my-10" dashed />
      <Divider className="my-10" type="dashed" />
      <Divider className="my-10" dotted />
    </div>
  );
};
`;

export default Demo;
