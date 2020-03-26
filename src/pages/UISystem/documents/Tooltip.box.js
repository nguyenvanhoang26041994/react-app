import React from 'react';
import cn from 'classnames';
import { Button, Tooltip } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

const src = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TOOLTIP">
      <div className="flex flex-col w-full items-center">
        <div className="flex">
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Tooltip placement="top-left" title="Top-Left tooltip">
            <Button className="m-2" style={{ width: '3em' }}>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title="Top tooltip">
            <Button className="m-2" style={{ width: '3em' }}>T</Button>
          </Tooltip>
          <Tooltip placement="top-right" title="Top-Right tooltip">
            <Button className="m-2" style={{ width: '3em' }}>TR</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
        </div>

        <div className="flex">
          <Tooltip placement="left-top" title="Left-Top tooltip">
            <Button className="m-2" style={{ width: '3em' }}>LT</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Tooltip placement="right-top" title="Right-To tooltip">
            <Button className="m-2" style={{ width: '3em' }}>RT</Button>
          </Tooltip>
        </div>

        <div className="flex">
          <Tooltip placement="left" title="Left tooltip">
            <Button className="m-2" style={{ width: '3em' }}>L</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Tooltip placement="right" title="Right tooltip">
            <Button className="m-2" style={{ width: '3em' }}>R</Button>
          </Tooltip>
        </div>

        <div className="flex">
          <Tooltip placement="left-bottom" title="Left-Bottom tooltip">
            <Button className="m-2" style={{ width: '3em' }}>LB</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Tooltip placement="right-bottom" title="Right-Bottom tooltip">
            <Button className="m-2" style={{ width: '3em' }}>RB</Button>
          </Tooltip>
        </div>

        <div className="flex">
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
          <Tooltip placement="bottom-left" title="Bottom-Left tooltip">
            <Button className="m-2" style={{ width: '3em' }}>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title="Bottom tooltip">
            <Button className="m-2" style={{ width: '3em' }}>V</Button>
          </Tooltip>
          <Tooltip placement="bottom-right" title="Bottom-Right tooltip">
            <Button className="m-2" style={{ width: '3em' }}>BR</Button>
          </Tooltip>
          <Button transparent disabled className="m-2" style={{ width: '3em' }}></Button>
        </div>
      </div>
    </PracticeBox>
  );
};
