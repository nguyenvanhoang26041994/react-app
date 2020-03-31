import React from 'react';
import { Stepper } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          completed
        >
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          canceled
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          processing
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};

Demo.description = `
<Stepper.Step completed /> ~ <Stepper.Step status="completed" />
<Stepper.Step canceled /> ~ <Stepper.Step status="canceled" />
<Stepper.Step processing /> ~ <Stepper.Step status="processing" />
Shorter is better

<Stepper.Step completed processing /> ~ <Stepper.Step status="processing" />
The last one will be work

<Stepper.Step status="canceled" processing /> ~ <Stepper.Step status="canceled" />
'status' will be overide all semantic prop
`;

Demo.code = `
import React from 'react';
import { Stepper } from '@/components/core';

export default () => {
  return (
    <div className="flex flex-col w-full">
      <Stepper className="mb-10">
        <Stepper.Step
          title="Step One"
          completed
        >
          Description One
        </Stepper.Step>
        <Stepper.Step title="Step Two">
          Description Two
        </Stepper.Step>
        <Stepper.Step
          title="Step Three"
          canceled
        >
          Description Three
        </Stepper.Step>
        <Stepper.Step
          title="Step Four"
          processing
        >
          Description Four
        </Stepper.Step>
      </Stepper>
    </div>
  );
};
`;

export default Demo;
