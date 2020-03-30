import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Placement from './demo/Placement';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="badge-basic" code={Basic.code} defaultExpanded>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="PLACEMENT" href="badge-placement" code={Placement.code} defaultExpanded>
          <Placement />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
      </div>
    </div>
  );
};

