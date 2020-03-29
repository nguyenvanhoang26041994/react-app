import React from 'react';
import { Stepper } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step title="Step One" completed icon="home">Description One</Stepper.Step>
        <Stepper.Step title="Step Two" icon="comments">Description Two</Stepper.Step>
        <Stepper.Step title="Step Three" canceled icon="copy">Description Three</Stepper.Step>
        <Stepper.Step title="Step Four" processing icon="power-off">Description Four</Stepper.Step>
      </Stepper>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Stepper } from '@/components/core';

export default () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step title="Step One" completed icon="home">Description One</Stepper.Step>
        <Stepper.Step title="Step Two" icon="comments">Description Two</Stepper.Step>
        <Stepper.Step title="Step Three" canceled icon="copy">Description Three</Stepper.Step>
        <Stepper.Step title="Step Four" processing icon="power-off">Description Four</Stepper.Step>
      </Stepper>
    </div>
  );
};
`;

export default Demo;
