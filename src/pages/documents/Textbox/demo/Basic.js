import React from 'react';
import { Textbox } from '../../../../components/core';

const Demo = () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};

Demo.code = `
import React from 'react';
import { Textbox } from '@/components/core';

export default () => {
  return (
    <Textbox
      placeholder="The placeholder"
      onChange={e => console.log(e.target.value)}
    />
  );
};
`;

export default Demo;
