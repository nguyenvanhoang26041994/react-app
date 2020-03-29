import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Disabled from './demo/Disabled';
import Accordion from './demo/Accordion';
import IconCustom from './demo/Icon';
import Controlled from './demo/Controlled';
import OnChangeEvent from './demo/OnChangeEvent';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="collapse-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="DISABLED" href="collapse-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="ACCORDION" href="collapse-accordion" code={Accordion.code}>
          <Accordion />
        </Codebox>
        <Codebox className="mb-5" header="WITH ICON" href="collapse-icon" code={IconCustom.code}>
          <IconCustom />
        </Codebox>
      </div>
      <div className="w-1/3 pl-2">
        <Codebox className="mb-5" header="CONTROLLED" href="collapse-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox>
        <Codebox className="mb-5" header="ON PANELS CHANGE EVENT" href="collapse-change-event" code={OnChangeEvent.code}>
          <OnChangeEvent />
        </Codebox>
      </div>
    </div>
  );
};
