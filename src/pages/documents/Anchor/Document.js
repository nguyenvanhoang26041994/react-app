import React from 'react';
import Codebox from '../../../components/Codebox';

import Top from './demo/Top';
import Bottom from './demo/Bottom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-2" header="BASIC" href="anchor-top" code={Top.code}>
          <Top />
        </Codebox>
      </div>
      <div className="w-1/2">
        <Codebox className="mb-2" header="BOTTOM" href="anchor-bottom" code={Bottom.code}>
          <Bottom />
        </Codebox>
      </div>
    </div>
  );
};
