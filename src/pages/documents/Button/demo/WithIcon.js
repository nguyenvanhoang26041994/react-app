import React from 'react';
import { Button, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2">
        <Icon name="power-off" className="mr-2" />
        <span>Shutdown</span>
      </Button>
      <Button className="mr-2">
        <span>Shutdown</span>
        <Icon name="power-off" className="ml-2" />
      </Button>
      <Button className="mr-2">
        <Icon name="power-off" className="mr-2" />
        <span>Shutdown</span>
        <Icon name="power-off" className="ml-2" />
      </Button>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button, Icon } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button className="mr-2">
        <Icon name="power-off" className="mr-2" />
        <span>Shutdown</span>
      </Button>
      <Button className="mr-2">
        <span>Shutdown</span>
        <Icon name="power-off" className="ml-2" />
      </Button>
      <Button className="mr-2">
        <Icon name="power-off" className="mr-2" />
        <span>Shutdown</span>
        <Icon name="power-off" className="ml-2" />
      </Button>
    </div>
  );
};
`;

export default Demo;
