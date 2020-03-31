import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import GroupButton from './demo/GroupButton';
import Color from './demo/Color';
import Size from './demo/Size';
import WithIcon from './demo/WithIcon';
import ColorButton from './demo/ColorButton';
import FluidGroupButton from './demo/FluidGroupButton';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="BASIC" href="button-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-2" header="COLOR BUTTON" href="button-bg-color" code={ColorButton.code}>
          <ColorButton />
        </Codebox>
        <Codebox className="mb-2" header="GROUP BUTTON" href="button-group-button" code={GroupButton.code}>
          <GroupButton />
        </Codebox>
      </div>
      <div className="w-1/3 pr-2">
        <Codebox className="mb-2" header="WITH ICON" href="button-with-icon" code={WithIcon.code}>
          <WithIcon />
        </Codebox>
        <Codebox className="mb-2" header="COLOR" href="button-color" code={Color.code}>
          <Color />
        </Codebox>
      </div>
      <div className="w-1/3">
        <Codebox className="mb-2" header="FONT SIZE" href="button-font-size" code={Size.code}>
          <Size />
        </Codebox>
        <Codebox className="mb-2" header="FLUID GROUP BUTTON" href="button-group-fluid" code={FluidGroupButton.code}>
          <FluidGroupButton />
        </Codebox>
      </div>
    </div>
  );
};

