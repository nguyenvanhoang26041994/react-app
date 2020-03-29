import React from 'react';
import { Button, Tooltip } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="top-left" title="top-left">
          <Button className="m-2" style={{ width: '3em' }}>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title="top">
          <Button className="m-2" style={{ width: '3em' }}>T</Button>
        </Tooltip>
        <Tooltip placement="top-right" title="top-right">
          <Button className="m-2" style={{ width: '3em' }}>TR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>

      <div className="flex">
        <Tooltip placement="left-top" title="left-top">
          <Button className="m-2" style={{ width: '3em' }}>LT</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="right-top" title="right-top">
          <Button className="m-2" style={{ width: '3em' }}>RT</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip placement="left" title="left">
          <Button className="m-2" style={{ width: '3em' }}>L</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="right" title="right">
          <Button className="m-2" style={{ width: '3em' }}>R</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Tooltip placement="left-bottom" title="left-bottom">
          <Button className="m-2" style={{ width: '3em' }}>LB</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="right-bottom" title="right-bottom">
          <Button className="m-2" style={{ width: '3em' }}>RB</Button>
        </Tooltip>
      </div>

      <div className="flex">
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
        <Tooltip placement="bottom-left" title="bottom-left">
          <Button className="m-2" style={{ width: '3em' }}>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title="bottom">
          <Button className="m-2" style={{ width: '3em' }}>B</Button>
        </Tooltip>
        <Tooltip placement="bottom-right" title="bottom-right">
          <Button className="m-2" style={{ width: '3em' }}>BR</Button>
        </Tooltip>
        <Button disabled className="m-2" style={{ width: '3em', visibility: 'hidden' }}></Button>
      </div>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Button, Tooltip } from '@/components/core';

export default () => {
  return (
    <Tooltip
      title="tooltip title"
      placement="top"
    >
      <Button className="mr-2">Hover</Button>
    </Tooltip>
  );
};
`;

export default Demo;
