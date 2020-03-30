import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Badge.scss');

const mPlacements = Object.freeze({
  top: '--top',
  bottom: '--bottom',
  left: '--left',
  right: '--right',
});

const Badge = ({
  className,
  children,
  dot,
  count,
  overflowCount,
  color,
  overlap,
  ...otherProps
}) => {
  const placement = useSemanticProp('placement', otherProps, Object.keys(mPlacements));
  const passedProps = useMemo(() => omit(otherProps, [
    'placement',
    'top',
    'left',
    'right',
    'bottom',
  ]), [otherProps]);

  return (
    <span
      className={cn(
        'rc-badge',
        {
          '--dot': dot,
          '--overlap': overlap,
        },
        '--top-right',
        mPlacements[placement],
        className
      )}
      {...passedProps}
    >
      {children}
      <sub className="rc-badge-count">{count}</sub>
    </span>
  );
};

Badge.displayName = 'Badge';
Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  dot: PropTypes.bool,
  count: PropTypes.number,
  overflowCount: PropTypes.number,
  color: PropTypes.string,
  overlap: PropTypes.bool,
  placement: PropTypes.string,
};
Badge.defaultProps = {};

export default Badge;
