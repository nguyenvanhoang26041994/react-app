import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import GroupButton from './demo/GroupButton';
import Color from './demo/Color';
import Size from './demo/Size';
import WithIcon from './demo/WithIcon';
import FluidGroupButton from './demo/FluidGroupButton';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 pr-2">
        <Codebox className="mb-5" header="BASIC" href="button-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="GROUP BUTTON" href="button-group-button" code={GroupButton.code}>
          <GroupButton />
        </Codebox>
        <Codebox className="mb-5" header="FONT SIZE" href="button-font-size" code={Size.code}>
          <Size />
        </Codebox>
      </div>
      <div className="w-1/2 pl-2">
        <Codebox className="mb-5" header="WITH ICON" href="button-with-icon" code={WithIcon.code}>
          <WithIcon />
        </Codebox>
        <Codebox className="mb-5" header="COLOR" href="button-color" code={Color.code}>
          <Color />
        </Codebox>
        <Codebox className="mb-5" header="FLUID GROUP BUTTON" href="button-group-fluid" code={FluidGroupButton.code}>
          <FluidGroupButton />
        </Codebox>
      </div>
    </div>
  );
};

