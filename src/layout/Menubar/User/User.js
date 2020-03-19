import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import Button from '../../../components/Button';

require('./User.scss');

const User = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-menubar-user neumorphism', className)}>
      <Avatar src={avatarUrl} className="rc-user-avatar" />
      <div className="flex flex-col ml-4 justify-center items-center">
        <a className="rc-menubar-user-name">{name}</a>
      </div>
      <Button style={{ fontSize: '1.25em' }} circle icon="bell" className="ml-5" />
      <Button style={{ fontSize: '1.25em' }} circle icon="comments" className="ml-2" />
      <Button style={{ fontSize: '1.25em' }} circle icon="power-off" className="ml-2" />
    </div>
  );
};

export default User;
