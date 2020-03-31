import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="BASIC" href="avatar-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/2">
      </div>
    </div>
  );
};

