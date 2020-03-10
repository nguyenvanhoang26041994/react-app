import React, { useMemo, useEffect, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Progress.scss');

const useSupportAnimation = time => {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    setTimeout(() => setWaiting(false), time) ;
  }, []);

  return waiting;
};

const Progress = ({ className, percent, r }) => {
  const strokeDasharray = useMemo(() => Math.PI * 4 * r, [r]);
  const maxStrokeDashoffset = useMemo(() => 2 * strokeDasharray, [strokeDasharray]);
  const strokeDashoffset = useMemo(() => {
    const newStrokeDashoffset = strokeDasharray + (strokeDasharray * percent);
    return newStrokeDashoffset > maxStrokeDashoffset ? maxStrokeDashoffset : newStrokeDashoffset;
  }, [strokeDasharray, percent, maxStrokeDashoffset]);

  const delayAnimation = useSupportAnimation(300);

  return (
    <div
      className={cn('rc-progress', className)}
      style={{ width: `${4 * r + 10}px`, height: `${4 * r + 10}px`}}
    >
      <svg className="rc-progress-svg">
        <circle
          cx={2 * r}
          cy={2 * r}
          r={2 * r}
          className="rc-progress-percent"
          style={{
            strokeDasharray,
            strokeDashoffset: delayAnimation ? strokeDasharray : strokeDashoffset,
          }}
        />
      </svg>
      <label className="rc-progress-number" style={{ fontSize: `${r * 0.8}px`}}>
        {percent * 100}
        <span>%</span>
      </label>
    </div>
  );
};

Progress.displayName = 'Progress';
Progress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  r: PropTypes.number,
  inverted: PropTypes.bool,
};
Progress.defaultProps = {
  percent: 0,
  r: 25
};

export default Progress;
