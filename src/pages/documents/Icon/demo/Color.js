import React from 'react';
import { Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="copy" color="blueviolet" />
      <Icon className="mr-5" name="cog" color="orangered" />
      <Icon className="mr-5" name="desktop" color="#00ffe9" />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Icon } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Icon className="mr-5" name="copy" color="blueviolet" />
      <Icon className="mr-5" name="cog" color="orangered" />
      <Icon className="mr-5" name="desktop" color="#00ffe9" />
    </div>
  );
};
`;

export default Demo;
