import React, { useState } from 'react';
import cn from 'classnames';
import { Icon, Button } from '../core';
import Item from './Item';

require('./LeftSidebar.scss');

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const [active, setActive] = useState('Button');

  return (
    <div id="left-sidebar-container" className={cn({ '--expanded': isExpanded })}>
      <div className={cn('left-sidebar', { '--expanded': isExpanded })} {...otherProps}>
        <div className="left-sidebar-list-menu">
          <Item active={active === 'Alert'} iconOnly={!isExpanded} name="Alert" icon={<Icon name="comments" />} onClick={() => setActive('Alert')} />
          <Item active={active === 'Button'} iconOnly={!isExpanded} name="Button" icon={<Icon name="power-off" />} onClick={() => setActive('Button')} />
          <Item active={active === 'Form'} iconOnly={!isExpanded} name="Form" icon={<Icon name="heart" />} onClick={() => setActive('Form')} />
          <Item active={active === 'Pagination'} iconOnly={!isExpanded} name="Pagination" icon={<Icon name="home" />} onClick={() => setActive('Pagination')} />
          <Item active={active === 'Timeline'} iconOnly={!isExpanded} name="Timeline" icon={<Icon name="clock" />} onClick={() => setActive('Timeline')} />
          <Item active={active === 'Table'} iconOnly={!isExpanded} name="Table" icon={<Icon name="table" />} onClick={() => setActive('Table')} />
          <Item active={active === 'Tooltip'} iconOnly={!isExpanded} name="Tooltip" icon={<Icon name="copy" />} onClick={() => setActive('Tooltip')} />
        </div>
      </div>
    </div>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
