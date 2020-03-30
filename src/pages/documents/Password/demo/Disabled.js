import React from 'react';
import { Password } from '../../../../components/core';

const Demo = () => {
  return (
    <Password
      disabled
      placeholder="The placeholder"
    />
  );
};

Demo.code = `
import React from 'react';
import { Password } from '@/components/core';

export default () => {
  return (
    <Password
      disabled
      placeholder="The placeholder"
    />
  );
};
`;

export default Demo;
