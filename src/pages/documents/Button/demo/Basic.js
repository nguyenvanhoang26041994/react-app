import React from 'react';
import { Button } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2">Basic</Button>
      <Button pressed className="mr-2">Pressed</Button>
      <Button disabled className="mr-2">Disabled</Button>
      <Button rounded className="mr-2">Rounded</Button>
      <Button circle icon="power-off" className="mr-2" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button className="mr-2">Basic</Button>
      <Button pressed className="mr-2">Pressed</Button>
      <Button disabled className="mr-2">Disabled</Button>
      <Button rounded className="mr-2">Rounded</Button>
      <Button circle icon="power-off" className="mr-2" />
    </div>
  );
};
`;

export default Demo;
