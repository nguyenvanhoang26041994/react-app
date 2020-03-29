import React from 'react';
import { Button, ButtonGroup } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex w-full">
      <ButtonGroup className="mr-5" fluid>
        <Button>Prev</Button>
        <Button>1</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button, ButtonGroup } from '@/components/core';

export default () => {
  return (
    <div className="flex" w-full>
      <ButtonGroup className="mr-5" fluid>
        <Button>Prev</Button>
        <Button>1</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </div>
  );
};
`;

export default Demo;
