import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import Icon from '../../../components/Icon';

require('./User.scss');

const User = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-menubar-user', className)}>
      <Avatar src={avatarUrl} className="rc-user-avatar" />
      <div className="flex flex-col ml-4 justify-center">
        <div className="flex">
          <Icon name="bell" className="mr-5" />
          <Icon name="comments" className="mr-5" />
          <Icon name="power-off" className="mr-5" />
          <Icon name="ellipsis-h" />
        </div>
        <a className="rc-menubar-user-name mt-1">{name}</a>
      </div>
    </div>
  );
};

export default User;
