import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="select-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        {/* <Codebox className="mb-5" header="WITH REF" href="textbox-with-ref" code={WithRef.code}>
          <WithRef />
        </Codebox> */}
      </div>
      <div className="w-1/3 pl-2">
        {/* <Codebox className="mb-5" header="CONTROLLED" href="textbox-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox> */}
      </div>
      <div className="w-1/3 pl-2">
        {/* <Codebox className="mb-5" header="DISABLED" href="textbox-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox> */}
      </div>
    </div>
  );
};

