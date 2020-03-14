import React from 'react';
import cn from 'classnames';

import DarkModeToggle from '../../../components/DarkModeToggle';

require('./SystemInfo.scss');

const SystemInfo = ({ className }) => {
  return (
    <div className={cn('rc-menubar-system-info neumorphism', className)}>
      <DarkModeToggle className="mr-5"/>
      <div className="flex flex-col">
        <h2 className="mr-5">FRIDAY, MARCH 13</h2>
        <h3 className="text-sm mr-5">10:45 PM</h3>
      </div>
    </div>
  );
};

export default SystemInfo;
