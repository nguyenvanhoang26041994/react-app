import React from 'react';
import cn from 'classnames';

import Avatar from '../../../components/Avatar';
import Icon from '../../../components/Icon';

require('./Search.scss');

const Search = ({ className, avatarUrl, name }) => {
  return (
    <div className={cn('rc-menubar-search neumorphism', className)}>
      <input type="search" />
      <Icon name="search" />
    </div>
  );
};

export default Search;
