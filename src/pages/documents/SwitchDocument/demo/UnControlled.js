import React from 'react';
import { Switch } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Switch className="mr-5" />
      <Switch defaultChecked className="mr-5" />
      <Switch disabled className="mr-5" />
      <Switch disabled defaultChecked className="mr-5" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Switch } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Switch className="mr-5" />
      <Switch defaultChecked className="mr-5" />
      <Switch disabled className="mr-5" />
      <Switch disabled defaultChecked className="mr-5" />
    </div>
  );
};
`;

export default Demo;
