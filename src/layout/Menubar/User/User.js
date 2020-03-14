import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import ActionButton from '../../../components/ActionButton';
import Icon from '../../../components/Icon';

require('./User.scss');

const User = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-menubar-user neumorphism', className)}>
      <Avatar src={avatarUrl} className="rc-user-avatar" />
      <div className="flex flex-col ml-4 justify-center items-center">
        <a className="rc-menubar-user-name">{name}</a>
      </div>
      <ActionButton icon="bell" className="ml-5" />
      <ActionButton icon="comments" className="ml-2" />
      <ActionButton icon="power-off" className="ml-2" />
    </div>
  );
};

export default User;
