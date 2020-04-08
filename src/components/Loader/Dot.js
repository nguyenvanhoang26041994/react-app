import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Loader.scss');

const mSizes = Object.freeze({
  small: '--small',
  large: '--large',
});

const Dot = ({ className, ...otherProps }) => {
  const size = useSemanticProp('size', otherProps, Object.keys(mSizes));

  const passedProps = useMemo(() => omit(otherProps, [
    ...Object.keys(mSizes),
  ]), [otherProps]);

  return (
    <div {...passedProps} className="rc-loader-container">
      <div className={cn('rc-loader-dot', '--dot-1', mSizes[size], className)}>{''}</div>
      <div className={cn('rc-loader-dot', '--dot-2', mSizes[size], className)}>{''}</div>
      <div className={cn('rc-loader-dot', '--dot-3', mSizes[size], className)}>{''}</div>
    </div>
  );
};

Dot.displayName = 'Dot';
Dot.propTypes = {
  className: PropTypes.string,
};
Dot.defaultProps = {};

export default Dot;
