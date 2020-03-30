import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Size from './demo/Size';
import NoImage from './demo/NoImage';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="avatar-basic" code={Basic.code} defaultExpanded>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="WITHOUT AVATAR" href="avatar-no-image" code={NoImage.code} defaultExpanded>
          <NoImage />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="SIZE" href="avatar-size" code={Size.code} defaultExpanded>
          <Size />
        </Codebox>
      </div>
    </div>
  );
};

