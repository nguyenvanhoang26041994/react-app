import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Max from './demo/Max';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="pagination-basic" code={Basic.code} defaultExpanded>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="MAX" href="pagination-max" code={Max.code} defaultExpanded>
          <Max />
        </Codebox>
      </div>
    </div>
  );
};

