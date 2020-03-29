import React from 'react';
import Codebox from '../../../components/Codebox';

import Pure from './demo/Pure';
import Basic from './demo/Basic';
import Push from './demo/Push';
import Content from './demo/Content';
import Semantic from './demo/Semantic';
import Closable from './demo/Closable';
import Duration from './demo/Duration';
import Custom from './demo/Custom';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="PURE CONFIRM" href="confirm-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-5" header="BASIC" href="confirm-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="CUSTOM" href="confirm-custom" code={Custom.code}>
          <Custom />
        </Codebox>
        <Codebox className="mb-5" header="AUTO CLOSE" href="confirm-duration" code={Duration.code}>
          <Duration />
        </Codebox>
        <Codebox className="mb-5" header="SEMANTIC" href="confirm-semantic" code={Semantic.code}>
          <Semantic />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="PUSH" href="confirm-push" code={Push.code}>
          <Push />
        </Codebox>
        <Codebox className="mb-5" header="WITH MORE DETAIL" href="confirm-content" code={Content.code}>
          <Content />
        </Codebox>
        <Codebox className="mb-5" header="WITHOUT CLOSE ICON" href="confirm-closable" code={Closable.code}>
          <Closable />
        </Codebox>
      </div>
    </div>
  );
};
