import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import DarkModeToggle from '../../../components/DarkModeToggle';
import ActionButton from '../../../components/ActionButton';

require('./TheRest.scss');

const TheRest = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-menubar-the-rest', className)}>
      <ActionButton className="mr-3" icon="heart" />
      <DarkModeToggle />
    </div>
  );
};

export default TheRest;
