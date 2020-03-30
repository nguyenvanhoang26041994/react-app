import React from 'react';
import { Divider } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
    </div>
  );
};
`;

export default Demo;
