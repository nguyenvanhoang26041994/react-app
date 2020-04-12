import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Skeleton = ({ active, className, ...otherProps}) => {
  return (
    <div {...otherProps} className={cn('rc-skeleton', className)}>
      <div className="rc-skeleton-content">
        <h3 className={cn('rc-skeleton-title', { '--active': active })}>{''}</h3>
        <ul className={cn('rc-skeleton-paragraph', { '--active': active })}>
          <li>{''}</li>
          <li>{''}</li>
          <li>{''}</li>
        </ul>
      </div>
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};
Skeleton.defaultProps = {};

export default Skeleton;
