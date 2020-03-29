import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Item.scss');

const Item = ({ className, children, icon, ...otherProps }) => {
  return (
    <div className={cn('rc-timeline-item', className)} {...otherProps}>
      <div className="rc-timeline-item-rail" />
      <Icon name={icon} className="rc-timeline-item-stone-icon"/>
      <div className="rc-timeline-item-content">
        {children}
      </div>
    </div>
  );
}

Item.displayName = 'Timeline.Item';
Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
};
Item.defaultProps = {
  icon: 'clock',
};

export default Item;
