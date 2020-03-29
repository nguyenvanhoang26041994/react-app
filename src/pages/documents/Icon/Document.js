import React from 'react';
import { Icon } from '../../../components/core';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Color from './demo/Color';
import Size from './demo/Size';
import Collection from './demo/Collection';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="icon-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="COLOR" href="icon-color" code={Color.code}>
          <Color />
        </Codebox>
        <Codebox className="mb-5" header="SIZE" href="icon-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="COLLECTION" href="icon-collection">
          <Collection />
        </Codebox>
      </div>
    </div>
  );
};

