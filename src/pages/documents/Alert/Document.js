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
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PURE ALERT" href="alert-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-2" header="BASIC" href="alert-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="CUSTOM" href="alert-custom" code={Custom.code}>
          <Custom />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="PUSH" href="alert-push" code={Push.code}>
          <Push />
        </Codebox>
        <Codebox className="mb-2" header="WITH MORE DETAIL" href="alert-content" code={Content.code}>
          <Content />
        </Codebox>
        <Codebox className="mb-2" header="WITHOUT CLOSE ICON" href="alert-closable" code={Closable.code}>
          <Closable />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="SEMANTIC" href="alert-semantic" code={Semantic.code} description={Semantic.description}>
          <Semantic />
        </Codebox>
        <Codebox className="mb-2" header="AUTO CLOSE" href="alert-duration" code={Duration.code}>
          <Duration />
        </Codebox>
      </div>
    </div>
  );
};
