import React from 'react';
import { Divider } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider title="DIVIDER TITLE" />
      <Divider dashed title="DIVIDER TITLE" />
      <Divider dotted title="DIVIDER TITLE" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider title="DIVIDER TITLE" />
      <Divider dashed title="DIVIDER TITLE" />
      <Divider dotted title="DIVIDER TITLE" />
    </div>
  );
};
`;

export default Demo;
