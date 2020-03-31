import React from 'react';
import cn from 'classnames';

import { Badge } from '../../../../components/core';

const FancyBox = ({
  size = '50px',
  style,
  children,
  hidden,
  className,
}) => (
  <div
    className={cn(
      'neumorphism--500 flex items-center justify-center',
      className,
    )}
    style={{
      height: size,
      width: size,
      visibility: hidden ? 'hidden' : null,
      ...style
    }}
  >
    {children}
  </div>
);

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="top-left" className="m-5">
          <FancyBox>TL</FancyBox>
        </Badge>
        <Badge count={7} placement="top" className="m-5">
          <FancyBox>T</FancyBox>
        </Badge>
        <Badge count={7} placement="top-right" className="m-5">
          <FancyBox>TR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>

      <div className="flex">
        <Badge count={7} placement="left-top" className="m-5">
          <FancyBox>LT</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right-top" className="m-5">
          <FancyBox>RT</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} placement="left" className="m-5">
          <FancyBox>L</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right" className="m-5">
          <FancyBox>R</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} placement="left-bottom" className="m-5">
          <FancyBox>LB</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right-bottom" className="m-5">
          <FancyBox>RB</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="bottom-left" className="m-5">
          <FancyBox>BL</FancyBox>
        </Badge>
        <Badge count={7} placement="bottom" className="m-5">
          <FancyBox>B</FancyBox>
        </Badge>
        <Badge count={7} placement="bottom-right" className="m-5">
          <FancyBox>BR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>
    </div>
  );
};

Demo.code = `
import React from 'react';
import cn from 'classnames';

import { Badge } from '@/components/core';

const FancyBox = ({
  size = '50px',
  style,
  children,
  hidden,
  className,
}) => (
  <div
    className={cn(
      'neumorphism--500 flex items-center justify-center',
      className,
    )}
    style={{
      height: size,
      width: size,
      visibility: hidden ? 'hidden' : null,
      ...style
    }}
  >
    {children}
  </div>
);

export default () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="top-left" className="m-5">
          <FancyBox>TL</FancyBox>
        </Badge>
        <Badge count={7} placement="top" className="m-5">
          <FancyBox>T</FancyBox>
        </Badge>
        <Badge count={7} placement="top-right" className="m-5">
          <FancyBox>TR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>

      <div className="flex">
        <Badge count={7} placement="left-top" className="m-5">
          <FancyBox>LT</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right-top" className="m-5">
          <FancyBox>RT</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} placement="left" className="m-5">
          <FancyBox>L</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right" className="m-5">
          <FancyBox>R</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} placement="left-bottom" className="m-5">
          <FancyBox>LB</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="right-bottom" className="m-5">
          <FancyBox>RB</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} placement="bottom-left" className="m-5">
          <FancyBox>BL</FancyBox>
        </Badge>
        <Badge count={7} placement="bottom" className="m-5">
          <FancyBox>B</FancyBox>
        </Badge>
        <Badge count={7} placement="bottom-right" className="m-5">
          <FancyBox>BR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>
    </div>
  );
};
`;

export default Demo;
