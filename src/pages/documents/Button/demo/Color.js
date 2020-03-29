import React from 'react';
import { Button } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Button className="mr-2" color="blueviolet">Blueviolet</Button>
      <Button className="mr-2" color="orangered">Orangered</Button>
      <Button className="mr-2" color="#00ffe9">#00ffe9</Button>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Button className="mr-2" color="blueviolet">Blueviolet</Button>
      <Button className="mr-2" color="orangered">Orangered</Button>
      <Button className="mr-2" color="#00ffe9">#00ffe9</Button>
    </div>
  );
};
`;

export default Demo;
