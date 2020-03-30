import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Controlled from './demo/Controlled';
import WithRef from './demo/WithRef';
import Disabled from './demo/Disabled';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="textarea-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="WITH REF" href="textarea-with-ref" code={WithRef.code}>
          <WithRef />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="CONTROLLED" href="textarea-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="DISABLED" href="textarea-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
    </div>
  );
};

