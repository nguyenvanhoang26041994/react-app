import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import WithRef from './demo/WithRef';
import Disabled from './demo/Disabled';
import MinAndMax from './demo/MinAndMax';
import Step from './demo/Step';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="input-number-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="WITH REF" href="input-number-with-ref" code={WithRef.code}>
          <WithRef />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="MIN AND MAX" href="input-number-min-max" code={MinAndMax.code}>
          <MinAndMax />
        </Codebox>
        <Codebox className="mb-5" header="STEP" href="input-number-step" code={Step.code}>
          <Step />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="DISABLED" href="input-number-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
    </div>
  );
};

