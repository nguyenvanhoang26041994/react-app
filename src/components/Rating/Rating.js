import React, { useState, useEffect, useCallback, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Rating.scss');

const Rating = ({ className, max, starRef, icon, defaultStar, onStarChange, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('star'), []);

  const [star, setStar] = useState(isControlled ? otherProps.star : defaultStar);
  const [currentStarHover, setCurrentStarHover] = useState('outside');

  const handleStarSelected = useCallback(val => {
    if (isControlled) {
      onStarChange(val);
    } else {
      setStar(val);
    }
  }, []);

  // SUPPORT CONTROLED COMPONENT
  useEffect(() => {
    onStarChange(star);
  }, [star]);

  useMemo(() => {
    if (isControlled) {
      setStar(otherProps.star);
    }
  }, [otherProps.star]);

  const stars = useMemo(() => {
    const rs = [];
    for (let i = 0; i < max; i++) {
      const isLighted = (currentStarHover >= i + 1) || (currentStarHover === 'outside' && star >= i + 1);

      rs.push(
        <div
          key={i}
          className={cn('rc-rating-item', { '--light': isLighted })}
          onMouseEnter={() => setCurrentStarHover(i + 1)}
          onClick={() => handleStarSelected(i + 1)}
        >
          <Icon name={icon} />
        </div>
      );
    }
    return rs;
  }, [star, currentStarHover, max]);

  return (
    <div
      className={cn('rc-rating', className)}
      ref={starRef}
      onMouseLeave={() => setCurrentStarHover('outside')}
      {...otherProps}
      star={star}
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
  star: PropTypes.number,
};
Rating.defaultProps = {
  icon: 'star',
  max: 5,
  onStarChange: f => f,
  defaultStar: 0,
};

export default Rating;
