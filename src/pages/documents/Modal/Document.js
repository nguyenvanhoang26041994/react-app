import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import ClickOutside from './demo/ClickOutside';
import Width from './demo/Width';
import Closable from './demo/Closable';
import Pure from './demo/Pure';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="PURE MODAL" href="modal-pure" code={Pure.code}>
          <Pure />
        </Codebox>
        <Codebox className="mb-5" header="BASIC" href="modal-basic" code={Basic.code}>
          <Basic />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="CLOSE CLICK OUTSIDE" href="modal-click-outside" code={ClickOutside.code}>
          <ClickOutside />
        </Codebox>
        <Codebox className="mb-5" header="WIDTH" href="modal-width" code={Width.code}>
          <Width />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="CLOSABLE" href="modal-closable" code={Closable.code}>
          <Closable />
        </Codebox>
      </div>
    </div>
  );
};
