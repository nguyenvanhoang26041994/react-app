import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Disabled from './demo/Disabled';
import Accordion from './demo/Accordion';
import IconCustom from './demo/Icon';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="stepper-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="DISABLED" href="stepper-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="ACCORDION" href="stepper-accordion" code={Accordion.code}>
          <Accordion />
        </Codebox>
        <Codebox className="mb-5" header="WITH ICON" href="stepper-icon" code={IconCustom.code}>
          <IconCustom />
        </Codebox>
      </div>
    </div>
  );
};
