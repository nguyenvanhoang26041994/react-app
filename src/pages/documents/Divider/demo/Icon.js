import React from 'react';
import { Divider, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider title={<Icon name="power-off" />} />
      <Divider dashed title={<Icon name="copy" />} />
      <Divider dotted title={<Icon name="comments" />} />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Divider, Icon } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider title={<Icon name="power-off" />} />
      <Divider dashed title={<Icon name="copy" />} />
      <Divider dotted title={<Icon name="comments" />} />
    </div>
  );
};
`;

export default Demo;
