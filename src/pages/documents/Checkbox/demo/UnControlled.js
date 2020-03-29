import React from 'react';
import { Checkbox } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Checkbox className="mr-5" />
      <Checkbox defaultChecked className="mr-5" />
      <Checkbox disabled className="mr-5" />
      <Checkbox disabled defaultChecked className="mr-5" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Checkbox } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Checkbox className="mr-5" />
      <Checkbox defaultChecked className="mr-5" />
      <Checkbox disabled className="mr-5" />
      <Checkbox disabled defaultChecked className="mr-5" />
    </div>
  );
};
`;

export default Demo;
