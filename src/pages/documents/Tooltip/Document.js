import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Placement from './demo/Placement';
import DefaultVisible from './demo/DefaultVisible';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="tooltip-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="DEFAULT VISIBLE" href="tooltip-default-visible" code={DefaultVisible.code}>
          <DefaultVisible />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="PLACEMENT" href="tooltip-basic" code={Placement.code}>
          <Placement />
        </Codebox>
      </div>
    </div>
  );
};

