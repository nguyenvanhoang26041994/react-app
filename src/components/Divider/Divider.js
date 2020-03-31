import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Divider.scss');

const mTypes = Object.freeze({
  dashed: '--dashed',
  solid: '--solid',
  dotted: '--dotted'
});

const mDirections = Object.freeze({
  left: '--left',
  right: '--right',
});

const Divider = ({ className, title, transparent,  ...otherProps }) => {
  const type = useSemanticProp('type', otherProps, Object.keys(mTypes));

  const direction = useSemanticProp('direction', otherProps, Object.keys(mDirections), [
    otherProps.left,
    otherProps.right,
    otherProps.direction,
  ]);

  const passedProps = useMemo(() => omit(otherProps, [
    'solid',
    'dashed',
    'dotted',
    'type',
    'left',
    'right',
    'direction',
  ]), [otherProps]);

  return (
    <div className={
      cn(
        'rc-divider',
        {
          '--transparent': transparent,
        },
        mTypes[type],
        mDirections[direction],
        className
      )}
      {...passedProps}
    >
      {title && <div className="rc-divider-title">{title}</div>}
    </div>
  );
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.any,
  solid: PropTypes.bool,
  dashed: PropTypes.bool,
  dotted: PropTypes.bool,
  transparent: PropTypes.bool,
  direction: PropTypes.string,
};
Divider.defaultProps = {};

export default Divider;
