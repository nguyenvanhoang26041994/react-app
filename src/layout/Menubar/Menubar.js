import React from 'react';
import cn from 'classnames';

import User from './User';
import Search from './Search';
import SystemInfo from './SystemInfo';
import TheRest from './TheRest';

require('./Menubar.scss');

const Menubar = ({ className }) => {
  return (
    <div className="rc-menubar-wrapper">
      <div className={cn('rc-menubar', className)}>
        {/* <SystemInfo className="ml-3" /> */}
        {/* <Search className="ml-3" /> */}
        <TheRest className="mx-3" />
        {/* <User
          className="mx-3"
          name="Nguyễn Văn Hoàng"
          avatarUrl="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C"
        /> */}
      </div>
    </div>
  )
};

export default Menubar;
