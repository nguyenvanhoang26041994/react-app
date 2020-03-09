import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Progress.scss');

const Progress = ({ className, percent, r }) => {
  const strokeDasharray = useMemo(() => Math.PI * 4 * r, [r]);
  const maxStrokeDashoffset = useMemo(() => 2 * strokeDasharray, [strokeDasharray]);
  const strokeDashoffset = useMemo(() => {
    const newStrokeDashoffset = strokeDasharray + (strokeDasharray * percent);
    return newStrokeDashoffset > maxStrokeDashoffset ? maxStrokeDashoffset : newStrokeDashoffset;
  }, [strokeDasharray, percent, maxStrokeDashoffset]);

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
            strokeDashoffset,
          }}
        />
      </svg>
      <label className="rc-progress-number">{percent * 100}%</label>
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
  r: 35
};

export default Progress;
