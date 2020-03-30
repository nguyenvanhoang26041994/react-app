import React from 'react';
import { Password } from '../../../../components/core';

const Demo = () => {
  return (
    <Password
      noEye
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

Demo.code = `
import React from 'react';
import { Password } from '@/components/core';

export default () => {
  return (
    <Password
      noEye
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};
`;

export default Demo;
