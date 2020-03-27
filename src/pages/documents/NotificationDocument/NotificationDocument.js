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
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="PURE NOTIFICATION" href="notification-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-5" header="BASIC" href="notification-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="AUTO CLOSE" href="notification-duration" code={Duration.code}>
          <Duration />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="PUSH" href="notification-push" code={Push.code}>
          <Push />
        </Codebox>
        <Codebox className="mb-5" header="CUSTOM CLOSE BEHAVIOR" href="notification-custom" code={Custom.code}>
          <Custom />
        </Codebox>
      </div>
    </div>
  );
};