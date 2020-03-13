import React from 'react';
import cn from 'classnames';

import Avatar from '../Avatar';
import Icon from '../Icon';

require('./User.scss');

const User = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-user', className)}>
      <Avatar src={avatarUrl} className="rc-user-avatar" />
      <div className="flex flex-col ml-4 justify-center">
        <a className="rc-user-name mb-1">{name}</a>
        <div className="flex">
          <Icon name="bell" className="mr-5" />
          <Icon name="comments" className="mr-5" />
          <Icon name="power-off" className="mr-5" />
          <Icon name="ellipsis-h" />
        </div>
      </div>
    </div>
  );
};

export default User;
