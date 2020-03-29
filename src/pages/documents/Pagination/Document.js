import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Max from './demo/Max';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="pagination-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="MAX" href="pagination-max" code={Max.code}>
          <Max />
        </Codebox>
      </div>
    </div>
  );
};

