import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Size from './demo/Size';
import NoImage from './demo/NoImage';
import WithOnline from './demo/WithOnline';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="avatar-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="ONLINE" href="avatar-online" code={WithOnline.code} defaultExpanded>
          <WithOnline />
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

