import React, { useState, useEffect, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Rating.scss');

const Rating = ({ className, max, starRef, icon, defaultCurrentStar, onStarChange, ...otherProps }) => {
  const [currentStar, setCurrentStar] = useState(defaultCurrentStar);
  const [currentStarHover, setCurrentStarHover] = useState('outside');

  useEffect(() => {
    onStarChange(currentStar);
  }, [currentStar]);

  const stars = useMemo(() => {
    const rs = [];
    for (let i = 0; i < max; i++) {
      const isLighted = (currentStarHover >= i + 1) || (currentStarHover === 'outside' && currentStar >= i + 1);

      rs.push(
        <div
          key={i}
          className={
            cn(
              'rc-rating-item',
              {
                'rc-rating-item--light': isLighted,
              }
            )
          }
          onMouseEnter={() => setCurrentStarHover(i + 1)}
          onClick={() => setCurrentStar(i + 1)}
        >
          <Icon name={icon} />
        </div>
      );
    }
    return rs;
  }, [currentStar, currentStarHover, max]);

  return (
    <div
      className={cn('rc-rating', className)}
      ref={starRef}
      onMouseLeave={() => setCurrentStarHover('outside')}
      {...otherProps}
    >
      {stars}
    </div>
  );
};

Rating.displayName = 'Rating';
Rating.propTypes = {
  icon: PropTypes.string,
  max: PropTypes.number,
  onStarChange: PropTypes.func,
};
Rating.defaultProps = {
  icon: 'star',
  max: 5,
  onStarChange: f => f,
};

export default Rating;
