import React  from 'react';
import { Progress } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex items-center">
      <Progress.Circle percent={0.27} r={30} className="mr-3" />
      <Progress.Circle percent={0.77} r={60} className="mr-3" />
    </div>
  );
};

Demo.code = `
import React  from 'react';
import { Progress } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Progress.Circle percent={0.27} r={30} className="mr-3" />
      <Progress.Circle percent={0.77} r={60} className="mr-3" />
    </div>
  );
};
`;

export default Demo;
