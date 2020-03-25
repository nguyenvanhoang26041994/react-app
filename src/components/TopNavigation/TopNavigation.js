import React from 'react';
import cn from 'classnames';
import { Button, Icon, Avatar } from '../core';

require('./TopNavigation.scss');

const TopNavigation = ({ onExpanding }) => {
  return (
    <div id="top-navigation-container">
      <div id="top-navigation" className={cn('top-navigation')}>
        <Icon name="caret-down" onClick={() => onExpanding(prev => !prev)} />
        <div className="flex items-center">
          <Icon name="comments" className="mr-5" />
          <Icon name="bell" className="mr-5" />
          <Avatar shape="square" style={{ width: '2.5em', height: '2.5em' }} src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C" name="Hoang Nguyen" />
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
