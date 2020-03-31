import React, { useState } from 'react';
import { Badge, Switch } from '../../../../components/core';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

const Demo = () => {
  const [invisible, setInvisible] = useState(true);

  return (
    <div>
      <Badge count={999} invisible={invisible}>
        <FancyBox size="50px" />
      </Badge>
      <Switch
        className="mt-10"
        checked={invisible}
        onChange={e => setInvisible(e.target.checked)}
      />
    </div>
  );
};

Demo.code = `
import React, { useState } from 'react';
import { Badge, Switch } from '@/components/core';

const FancyBox = ({ size }) => (
  <div
    className="neumorphism--500"
    style={{ height: size, width: size }}
  />
);

export default () => {
  const [invisible, setInvisible] = useState(true);

  return (
    <div>
      <Badge count={999} invisible={invisible}>
        <FancyBox size="50px" />
      </Badge>
      <Switch
        className="mt-10"
        checked={invisible}
        onChange={e => setInvisible(e.target.checked)}
      />
    </div>
  );
};
`;

export default Demo;
