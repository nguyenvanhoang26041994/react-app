import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import DarkModeToggle from '../../../components/DarkModeToggle';

require('./TheRest.scss');

const TheRest = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-menubar-the-rest', className)}>
      <DarkModeToggle />
    </div>
  );
};

export default TheRest;
