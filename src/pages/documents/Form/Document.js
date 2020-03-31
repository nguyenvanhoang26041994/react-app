import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Required from './demo/Required';
import Status from './demo/Status';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="form-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="REQUIRED" href="form-required" code={Required.code}>
          <Required />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="STATUS DISPLAY" href="form-status" code={Status.code}>
          <Status />
        </Codebox>
      </div>
    </div>
  );
};
