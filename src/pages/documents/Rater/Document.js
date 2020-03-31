import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Max from './demo/Max';
import Size from './demo/Size';
import IconDemo from './demo/Icon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="rater-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="SIZE" href="rater-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="MAX" href="rater-max" code={Max.code}>
          <Max />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="WITH CUSTOM ICON" href="rater-with-icon" code={IconDemo.code}>
          <IconDemo />
        </Codebox>
      </div>
    </div>
  );
};

