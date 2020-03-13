import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import Icon from '../../../components/Icon';

require('./SystemInfo.scss');

const SystemInfo = ({ className }) => {
  return (
    <div className={cn('rc-menubar-system-info', className)}>
      <h2 className="text-xl mr-5">FRI</h2>
      <h3 className="text-sm mr-5">10:45 PM</h3>
      <h2 className="text-sm">MAR 13</h2>
    </div>
  );
};

export default SystemInfo;
