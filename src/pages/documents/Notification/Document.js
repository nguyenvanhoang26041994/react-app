import React from 'react';
import Codebox from '../../../components/Codebox';

import Pure from './demo/Pure';
import Basic from './demo/Basic';
import Push from './demo/Push';
import Duration from './demo/Duration';
import Custom from './demo/Custom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PURE NOTIFICATION" href="notification-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-2" header="BASIC" href="notification-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PUSH" href="notification-push" code={Push.code}>
          <Push />
        </Codebox>
        <Codebox className="mb-2" header="CUSTOM CLOSE BEHAVIOR" href="notification-custom" code={Custom.code}>
          <Custom />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="AUTO CLOSE" href="notification-duration" code={Duration.code}>
          <Duration />
        </Codebox>
      </div>
    </div>
  );
};
