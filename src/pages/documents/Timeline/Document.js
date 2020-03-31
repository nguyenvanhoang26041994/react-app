import React from 'react';
import { Icon } from '../../../components/core';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Reverse from './demo/Reverse';
import Right from './demo/Right';
import CustomIcon from './demo/CustomIcon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="timeline-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="RIGHT" href="timeline-right" code={Right.code}>
          <Right />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="CUSTOM ICON" href="timeline-custom-icon" code={CustomIcon.code}>
          <CustomIcon />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="REVERSE" href="timeline-reverse" code={Reverse.code}>
          <Reverse />
        </Codebox>
      </div>
    </div>
  );
};
