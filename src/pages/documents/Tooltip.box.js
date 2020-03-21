import React from 'react';
import cn from 'classnames';
import { Button, Tooltip } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

const src = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TOOLTIP">
      <div className="flex flex-col w-full items-center">
        <div className="flex">
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Tooltip placement="top-left" label="Top-Left tooltip">
            <Button className="m-2" style={{ width: '7em' }}>TL</Button>
          </Tooltip>
          <Tooltip placement="top" label="Top tooltip" defaultVisible>
            <Button className="m-2" style={{ width: '7em' }}>Top</Button>
          </Tooltip>
          <Tooltip placement="top-right" label="Top-Right tooltip">
            <Button className="m-2" style={{ width: '7em' }}>TR</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
        </div>

        <div className="flex">
          <Tooltip placement="left-top" label="Left-Top tooltip">
            <Button className="m-2" style={{ width: '7em' }}>LT</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Tooltip placement="right-top" label="Right-To tooltip">
            <Button className="m-2" style={{ width: '7em' }}>RT</Button>
          </Tooltip>
        </div>

        <div className="flex">
          <Tooltip placement="left" label="Left tooltip" defaultVisible>
            <Button className="m-2" style={{ width: '7em' }}>Left</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Tooltip placement="right" label="Right tooltip" defaultVisible>
            <Button className="m-2" style={{ width: '7em' }}>Right</Button>
          </Tooltip>
        </div>

        <div className="flex">
          <Tooltip placement="left-bottom" label="Left-Bottom tooltip">
            <Button className="m-2" style={{ width: '7em' }}>LB</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Tooltip placement="right-bottom" label="Right-Bottom tooltip">
            <Button className="m-2" style={{ width: '7em' }}>RB</Button>
          </Tooltip>
        </div>

        <div className="flex">
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
          <Tooltip placement="bottom-left" label="Bottom-Left tooltip">
            <Button className="m-2" style={{ width: '7em' }}>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" label="Bottom tooltip" defaultVisible>
            <Button className="m-2" style={{ width: '7em' }}>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottom-right" label="Bottom-Right tooltip">
            <Button className="m-2" style={{ width: '7em' }}>BR</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '7em' }}></Button>
        </div>
      </div>
    </PracticeBox>
  );
};
