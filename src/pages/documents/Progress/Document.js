import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import LineBasic from './demo/LineBasic';
import Size from './demo/Size';
import NoText from './demo/NoText';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="PROGRESS CIRCLE" href="progress-basic-circle" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="PROGRESS LINE" href="progress-basic-line" code={LineBasic.code}>
          <LineBasic />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="PROGRESS CIRCLE SIZE" href="progress-circle-size" code={Size.code}>
          <Size />
        </Codebox>
        <Codebox className="mb-5" header="PROGRESS LINE NO TEXT" href="progress-notext-line" code={NoText.code}>
          <NoText />
        </Codebox>
      </div>
    </div>
  );
};

