import React from 'react';
import { Button, ButtonGroup } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <ButtonGroup className="mr-5">
        <Button>Prev</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>Next</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <Button icon="power-off" />
        <Button icon="comments" />
        <Button icon="bell" />
      </ButtonGroup>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button, ButtonGroup } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <ButtonGroup className="mr-5">
        <Button>Prev</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>Next</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <Button icon="power-off" />
        <Button icon="comments" />
        <Button icon="bell" />
      </ButtonGroup>
    </div>
  );
};
`;

export default Demo;
