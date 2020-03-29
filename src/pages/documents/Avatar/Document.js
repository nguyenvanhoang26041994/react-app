import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Size from './demo/Size';
import NoImage from './demo/NoImage';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="avatar-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="SIZE" href="avatar-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="WITHOUT AVATAR" href="avatar-no-image" code={NoImage.code}>
          <NoImage />
        </Codebox>
      </div>
    </div>
  );
};

