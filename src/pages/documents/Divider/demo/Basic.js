import React from 'react';
import { Divider } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
      <Divider transparent />
    </div>
  );
};

Demo.description = `
<Divider dashed /> ~ <Divider type="dashed" />
<Divider dotted /> ~ <Divider type="dotted" />
<Divider solid /> ~ <Divider type="solid" />
Shorter, save coding time

<Divider solid dotted dashed /> ~ <Divider type="dashed" />
The last one will be work

<Divider type="dotted" dashed /> ~ <Divider type="dotted" />
'type' will override semantic prop
`;

Demo.code = `
import React from 'react';
import { Divider } from '@/components/core';

export default () => {
  return (
    <div className="w-full">
      <Divider />
      <Divider dashed />
      <Divider type="dashed" />
      <Divider dotted />
      <Divider transparent />
    </div>
  );
};
`;

export default Demo;
