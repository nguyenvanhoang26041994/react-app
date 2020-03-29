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
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="timeline-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="REVERSE" href="timeline-reverse" code={Reverse.code}>
          <Reverse />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="RIGHT" href="timeline-right" code={Right.code}>
          <Right />
        </Codebox>
        <Codebox className="mb-5" header="CUSTOM ICON" href="timeline-custom-icon" code={CustomIcon.code}>
          <CustomIcon />
        </Codebox>
      </div>
    </div>
  );
};
