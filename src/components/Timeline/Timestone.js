import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Timestone.scss');

const Timestone = ({ className, children, icon, ...otherProps }) => {
  return (
    <div className={cn('rc-timestone', className)} {...otherProps}>
      <div className="rc-timestone-rail" />
      <Icon name={icon} className="rc-timestone-stone-icon"/>
      <div className="rc-timestone-content">
        {children}
      </div>
    </div>
  );
}

Timestone.displayName = 'Timeline.Timestone';
Timestone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
};
Timestone.defaultProps = {
  icon: 'clock',
};

export default Timestone;
