import React from 'react';
import { Textbox } from '../../../../components/core';

const Demo = () => {
  return (
    <Textbox
      disabled
      placeholder="The placeholder"
    />
  );
};

Demo.code = `
import React from 'react';
import { Textbox } from '@/components/core';

export default () => {
  return (
    <Textbox
      disabled
      placeholder="The placeholder"
    />
  );
};
`;

export default Demo;
