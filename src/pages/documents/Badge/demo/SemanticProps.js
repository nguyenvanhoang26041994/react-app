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
        <Badge count={7} topLeft className="m-5">
          <FancyBox>TL</FancyBox>
        </Badge>
        <Badge count={7} top className="m-5">
          <FancyBox>T</FancyBox>
        </Badge>
        <Badge count={7} topRight className="m-5">
          <FancyBox>TR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>

      <div className="flex">
        <Badge count={7} leftTop className="m-5">
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
        <Badge count={7} left className="m-5">
          <FancyBox>L</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} right className="m-5">
          <FancyBox>R</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} leftBottom className="m-5">
          <FancyBox>LB</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} rightBottom className="m-5">
          <FancyBox>RB</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} bottomLeft className="m-5">
          <FancyBox>BL</FancyBox>
        </Badge>
        <Badge count={7} bottom className="m-5">
          <FancyBox>B</FancyBox>
        </Badge>
        <Badge count={7} bottomRight className="m-5">
          <FancyBox>BR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>
    </div>
  );
};

Demo.description = `
<Badge topRight /> ~ <Badge placement="top-right" />
Better, right?


<Badge topRight topLeft /> ~ <Badge placement="top-left" />
The last prop will be work


<Badge placement="top-right" topLeft bottomLeft /> ~ <Badge placement="top-right" />
placement="top-left" will override topLeft, topRight,... if all is set
`;

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
        <Badge count={7} topLeft className="m-5">
          <FancyBox>TL</FancyBox>
        </Badge>
        <Badge count={7} top className="m-5">
          <FancyBox>T</FancyBox>
        </Badge>
        <Badge count={7} topRight className="m-5">
          <FancyBox>TR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>

      <div className="flex">
        <Badge count={7} leftTop className="m-5">
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
        <Badge count={7} left className="m-5">
          <FancyBox>L</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} right className="m-5">
          <FancyBox>R</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <Badge count={7} leftBottom className="m-5">
          <FancyBox>LB</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <FancyBox hidden className="m-5" />
        <Badge count={7} rightBottom className="m-5">
          <FancyBox>RB</FancyBox>
        </Badge>
      </div>

      <div className="flex">
        <FancyBox hidden className="m-5" />
        <Badge count={7} bottomLeft className="m-5">
          <FancyBox>BL</FancyBox>
        </Badge>
        <Badge count={7} bottom className="m-5">
          <FancyBox>B</FancyBox>
        </Badge>
        <Badge count={7} bottomRight className="m-5">
          <FancyBox>BR</FancyBox>
        </Badge>
        <FancyBox hidden className="m-5" />
      </div>
    </div>
  );
};
`;

export default Demo;
