import React from 'react';
import { Button } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2" fontSize="0.85rem">0.85rem</Button>
      <Button className="mr-2" fontSize="1.25rem">1.25rem</Button>
      <Button className="mr-2" fontSize="1.5em">1.5em</Button>
      <Button className="mr-2" fontSize="25px">25px</Button>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button className="mr-2" fontSize="0.85rem">0.85rem</Button>
      <Button className="mr-2" fontSize="1.25rem">1.25rem</Button>
      <Button className="mr-2" fontSize="1.5em">1.5em</Button>
      <Button className="mr-2" fontSize="25px">25px</Button>
    </div>
  );
};
`;

export default Demo;
