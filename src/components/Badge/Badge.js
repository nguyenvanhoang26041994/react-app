import React, { useMemo, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';
import mPlacements from '../placements';

require('./Badge.scss');

const Badge = ({
  className,
  children,
  dot,
  count,
  overflowCount,
  color,
  overlap,
  invisible,
  ...otherProps
}) => {
  const countRef = useRef();

  const placement = useSemanticProp('placement', otherProps, Object.keys(mPlacements));
  const passedProps = useMemo(() => omit(otherProps, [
    'placement',
    ...Object.keys(mPlacements),
  ]), [otherProps]);

  useLayoutEffect(() => {
    if (count && count > 0) {
      countRef.current.classList.add('--badge-up-animation');

      const timer = setTimeout(() => countRef.current.classList.remove('--badge-up-animation'), 500);

      return () => clearTimeout(timer);
    }
  }, [count]);

  const isHidden = useMemo(() => {
    if (invisible) {
      return true;
    }
    if (dot) {
      return false;
    }

    if (!count || count < 1) {
      return true;
    }
  }, [dot, invisible, count]);

  const displayCount = useMemo(() => {
    if (!count) {
      return null;
    }
    if (count > overflowCount) {
      return `${overflowCount} +`;
    }

    return count;
  } ,[count, overflowCount]);

  return (
    <span
      className={cn(
        'rc-badge',
        {
          '--dot': dot,
          '--overlap': overlap,
        },
        mPlacements[placement] || '--top-right',
        className
      )}
      {...passedProps}
    >
      {children}
      <sub
        ref={countRef}
        style={{
          backgroundColor: color,
        }}
        className={cn('rc-badge-count', { '--hidden': isHidden })}
      >
        <b>{displayCount}</b>
      </sub>
    </span>
  );
};

Badge.displayName = 'Badge';
Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  dot: PropTypes.bool,
  invisible: PropTypes.bool,
  count: PropTypes.number,
  overflowCount: PropTypes.number,
  color: PropTypes.string,
  overlap: PropTypes.bool,
  placement: PropTypes.string,
};

Badge.defaultProps = {
  overflowCount: Infinity,
};

export default Badge;
