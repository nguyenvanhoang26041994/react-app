import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mShape = Object.freeze({
  circle: '--circle',
  rect: '--rect',
  p: '--paragraph'
});

const lShape = Object.keys(mShape);

const Skeleton = ({ className, w, h, style, size, ...otherProps }) => {
  const shape = useSemanticProp('shape', otherProps, lShape);
  const passedProps = useMemo(() => omit(otherProps, [...lShape, 'shape']), [otherProps]);

  return (
    <div
      style={{
        width: w,
        height: h,
        fontSize: size,
        ...style
      }}
      className={cn('rc-skeleton', mShape[shape], className)}
      {...passedProps}
    />
  );
};

Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.string,
  circle: PropTypes.bool,
  rect: PropTypes.bool,
  p: PropTypes.bool,
  w: PropTypes.string,
  h: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};
Skeleton.defaultProps = {};

export default Skeleton;
