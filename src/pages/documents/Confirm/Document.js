import React from 'react';
import Codebox from '../../../components/Codebox';

import Pure from './demo/Pure';
import Basic from './demo/Basic';
import Push from './demo/Push';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="PURE CONFIRM" href="confirm-pure" code={Pure.code}>
          <Pure />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="PUSH" href="confirm-push" code={Push.code}>
          <Push />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="BASIC" href="confirm-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
    </div>
  );
};
