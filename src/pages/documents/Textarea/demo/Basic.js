import React from 'react';
import { Textarea } from '../../../../components/core';

const Demo = () => {
  return (
    <Textarea
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

Demo.code = `
import React from 'react';
import { Textarea } from '@/components/core';

export default () => {
  return (
    <Textarea
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};
`;

export default Demo;
