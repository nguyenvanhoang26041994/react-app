import React from 'react';
import cn from 'classnames';
import { Button, Icon, Avatar } from '../../../components/core';

require('./TopNavigation.scss');

const TopNavigation = ({ toggleExpand, isExpanded }) => {
  return (
    <div class={cn('top-navigation-container', { '--expanded': isExpanded })}>
      <div className={cn('top-navigation-wrapper', { '--expanded': isExpanded })}>
        <div className={cn('top-navigation', { '--expanded': isExpanded })}>
          <div className="__left">
            <Icon name="bars" onClick={toggleExpand} />
            <Icon name="search" className="ml-8" />
          </div>
          <div className="__right">
            <Icon name="bell" className="mr-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
