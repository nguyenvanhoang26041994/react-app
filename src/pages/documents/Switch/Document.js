import React from 'react';
import { Icon } from '../../../components/core';
import Codebox from '../../../components/Codebox';

import UnControlled from './demo/UnControlled';
import Controlled from './demo/Controlled';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="UNCONTROLLED" href="switch-uncontrolled" code={UnControlled.code}>
          <UnControlled />
        </Codebox>
        <Codebox className="mb-5" header="CONTROLLED" href="switch-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
      </div>
    </div>
  );
};
