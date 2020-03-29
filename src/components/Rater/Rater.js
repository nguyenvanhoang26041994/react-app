import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Rater.scss');

const isLighted = (currentStarHover, idx, star) => (currentStarHover >= idx + 1) || (currentStarHover === 'outside' && star >= idx + 1);

const Rater = ({ className, max, starRef, icon, star, onChange, fontSize, style, ...otherProps }) => {
  const [currentStarHover, setCurrentStarHover] = useState('outside');

  const stars = useMemo(() => {
    const rs = [];
    for (let i = 0; i < max; i++) {
      rs.push(
        <div
          key={i}
          className={cn('rc-rater-item', { '--light': isLighted(currentStarHover, i, star) })}
          onMouseEnter={() => setCurrentStarHover(i + 1)}
          onClick={() => onChange(i + 1)}
        >
          <Icon name={icon} />
        </div>
      );
    }
    return rs;
  }, [star, currentStarHover, max]);

  return (
    <div
      className={cn('rc-rater', className)}
      ref={starRef}
      onMouseLeave={() => setCurrentStarHover('outside')}
      style={{
        ...style,
        fontSize,
      }}
      {...otherProps}
    >
      {stars}
    </div>
  );
};

Rater.displayName = 'Rater';
Rater.propTypes = {
  icon: PropTypes.string,
  max: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  starRef: PropTypes.any,
  star: PropTypes.number,
  style: PropTypes.object,
  fontSize: PropTypes.string,
};
Rater.defaultProps = {
  icon: 'star',
  max: 5,
  onChange: f => f,
};

export default Rater;
