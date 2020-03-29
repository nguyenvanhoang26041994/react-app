import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';

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

const Divider = ({ className, title, ...otherProps }) => {
  const type = useSemanticProp('type', otherProps, Object.keys(mTypes), [
    otherProps.solid,
    otherProps.dashed,
    otherProps.dotted,
    otherProps.type,
  ]);

  const direction = useSemanticProp('direction', otherProps, Object.keys(mDirections), [
    otherProps.left,
    otherProps.right,
    otherProps.direction,
  ]);

  return (
    <div className={cn('rc-divider', mTypes[type], mDirections[direction],className)}>
      {title && <div className="rc-divider-title">{title}</div>}
    </div>
  );
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(mTypes)),
  title: PropTypes.any,
  solid: PropTypes.bool,
  dashed: PropTypes.bool,
  dotted: PropTypes.bool,
  direction: PropTypes.oneOf(Object.keys(mDirections)),
};
Divider.defaultProps = {};

export default Divider;
