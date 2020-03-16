import React, { useState, useEffect, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Rating.scss');

const Rating = ({ className, max, starRef, icon, defaultStar, onStarChange, ...otherProps }) => {
  const [star, setStar] = useState(defaultStar);
  const [currentStarHover, setCurrentStarHover] = useState('outside');

  useEffect(() => {
    onStarChange(star);
  }, [star]);

  const stars = useMemo(() => {
    const rs = [];
    for (let i = 0; i < max; i++) {
      const isLighted = (currentStarHover >= i + 1) || (currentStarHover === 'outside' && star >= i + 1);

      rs.push(
        <div
          key={i}
          className={cn('rc-rating-item', { '--light': isLighted })}
          onMouseEnter={() => setCurrentStarHover(i + 1)}
          onClick={() => setStar(i + 1)}
        >
          <Icon name={icon} />
        </div>
      );
    }
    return rs;
  }, [star, currentStarHover, max]);

  return (
    <div
      star={star}
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
  defaultStar: PropTypes.number,
  className: PropTypes.string,
  starRef: PropTypes.any,
};
Rating.defaultProps = {
  icon: 'star',
  max: 5,
  onStarChange: f => f,
  defaultStar: 0,
};

export default Rating;
