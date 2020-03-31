import React from 'react';
import { Button, Tooltip } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip topLeft title="top-left">
          <Button className="m-2" style={{ width: '3em' }}>TL</Button>
        </Tooltip>
        <Tooltip top title="top">
          <Button className="m-2" style={{ width: '3em' }}>T</Button>
        </Tooltip>
        <Tooltip topRight title="top-right">
          <Button className="m-2" style={{ width: '3em' }}>TR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Tooltip leftTop title="left-top">
          <Button className="m-2" style={{ width: '3em' }}>LT</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip rightTop title="right-top">
          <Button className="m-2" style={{ width: '3em' }}>RT</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip left title="left">
          <Button className="m-2" style={{ width: '3em' }}>L</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip right title="right">
          <Button className="m-2" style={{ width: '3em' }}>R</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip leftBottom title="left-bottom">
          <Button className="m-2" style={{ width: '3em' }}>LB</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip rightBottom title="right-bottom">
          <Button className="m-2" style={{ width: '3em' }}>RB</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip bottomLeft title="bottom-left">
          <Button className="m-2" style={{ width: '3em' }}>BL</Button>
        </Tooltip>
        <Tooltip bottom title="bottom">
          <Button className="m-2" style={{ width: '3em' }}>B</Button>
        </Tooltip>
        <Tooltip bottomRight title="bottom-right">
          <Button className="m-2" style={{ width: '3em' }}>BR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

Demo.description = `
<Tooltip top /> ~ <Tooltip placement="top" /> 
<Tooltip topRight /> ~ <Tooltip placement="top-right" />
Must be better

<Tooltip top topRight /> ~ <Tooltip placement="top-right" />
The last one will be work

<Tooltip placement="top-right" top left /> ~ <Tooltip placement="top-right" />
'placement' will override semantic prop
`;

Demo.code = `
import React from 'react';
import { Button, Tooltip } from '@/components/core';

export default () => {
  return (
    <Tooltip
      topLeft
      title="tooltip title"
    >
      <Button className="mr-2">Hover</Button>
    </Tooltip>
  );
};
`;

export default Demo;
