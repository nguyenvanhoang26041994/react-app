import React from 'react';
import { InputNumber } from '../../../../components/core';

const Demo = () => {
  return (
    <InputNumber
      step={10}
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
      step={10}
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};
`;

export default Demo;
