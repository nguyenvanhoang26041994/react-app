import React from 'react';
import Codebox from '../../../components/Codebox';

import Basic from './demo/Basic';
import Placement from './demo/Placement';
import Overlap from './demo/Overlap';
import Dot from './demo/Dot';
import CountUpAnimation from './demo/CountUpAnimation';
import CustomColor from './demo/CustomColor';
import OverflowCount from './demo/OverflowCount';
import Invisible from './demo/Invisible';

export default () => {
  return (
    <div className="flex">
      <div className="w-1/3 pr-2">
        <Codebox className="mb-5" header="BASIC" href="badge-basic" code={Basic.code}>
          <Basic />
        </Codebox>
        <Codebox className="mb-5" header="CUSTOM COLOR" href="badge-color" code={CustomColor.code}>
          <CustomColor />
        </Codebox>
        <Codebox className="mb-5" header="DOT" href="badge-animation" code={Dot.code}>
          <Dot />
        </Codebox>
        <Codebox className="mb-5" header="Overflow Count" href="badge-overflow" code={OverflowCount.code}>
          <OverflowCount />
        </Codebox>
        <Codebox className="mb-5" header="INVISIBLE" href="badge-invisible" code={Invisible.code}>
          <Invisible />
        </Codebox>
        <Codebox className="mb-5" header="COUNT UP ANIMATION" href="badge-dot" code={CountUpAnimation.code}>
          <CountUpAnimation />
        </Codebox>
      </div>
      <div className="w-2/3 pl-2">
        <Codebox className="mb-5" header="PLACEMENT" href="badge-placement" code={Placement.code}>
          <Placement />
        </Codebox>
        <Codebox className="mb-5" header="OVERLAP" href="badge-overlap" code={Overlap.code}>
          <Overlap />
        </Codebox>
      </div>
    </div>
  );
};

