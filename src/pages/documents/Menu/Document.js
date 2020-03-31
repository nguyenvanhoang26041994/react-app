import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import IconDemo from './demo/Icon';
import Group from './demo/Group';
import Sub from './demo/Sub';
import IconOnly from './demo/IconOnly';
import Disabled from './demo/Disabled';
import TitleWithIconOnly from './demo/TitleWithIconOnly';
import Multiple from './demo/Multiple';
import Controlled from './demo/Controlled';
import SubInGroup from './demo/SubInGroup';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="menu-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="CONTROLLED MENU" href="menu-controlled" code={Controlled.code}>
          <Controlled />
        </Codebox>
        <Codebox className="mb-2" header="SUB MENU" href="menu-sub" code={Sub.code}>
          <Sub />
        </Codebox>
        <Codebox className="mb-2" header="MULTIPLE" href="menu-multiple" code={Multiple.code}>
          <Multiple />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="DISABLED" href="menu-disabled" code={Disabled.code}>
          <Disabled />
        </Codebox>
        <Codebox className="mb-2" header="WITH ICON" href="menu-with-icon" code={IconDemo.code}>
          <IconDemo />
        </Codebox>
        <Codebox className="mb-2" header="GROUP MENU" href="menu-group" code={Group.code}>
          <Group />
        </Codebox>
        <Codebox className="mb-2" header="SUB IN GROUP MENU" href="menu-sub-group" code={SubInGroup.code}>
          <SubInGroup />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="ICON ONLY" href="menu-only" code={IconOnly.code}>
          <IconOnly />
        </Codebox>
        <Codebox className="mb-2" header="ICON ONLY BUT NOT SET ICON" href="menu-only-icon-no-icon" code={TitleWithIconOnly.code}>
          <TitleWithIconOnly />
        </Codebox>
      </div>
    </div>
  );
};

