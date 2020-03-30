import React from 'react';
import { InputNumber } from '../../../../components/core';

const Demo = () => {
  return (
    <InputNumber
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

Demo.code = `
import React from 'react';
import { InputNumber } from '@/components/core';

export default () => {
  return (
    <InputNumber
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};
`;

export default Demo;
