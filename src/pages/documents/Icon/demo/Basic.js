import React from 'react';
import { Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="copy" />
      <Icon className="mr-5" name="cog" />
      <Icon className="mr-5" name="desktop" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Icon } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="copy" />
      <Icon className="mr-5" name="cog" />
      <Icon className="mr-5" name="desktop" />
    </div>
  );
};
`;

export default Demo;
