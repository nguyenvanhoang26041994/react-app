import React from 'react';
import { Textarea } from '../../../../components/core';

const Demo = () => {
  return (
    <Textarea
      disabled
      placeholder="The placeholder"
    />
  );
};

Demo.code = `
import React from 'react';
import { Textarea } from '@/components/core';

export default () => {
  return (
    <Textarea
      disabled
      placeholder="The placeholder"
    />
  );
};
`;

export default Demo;
