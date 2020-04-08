import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Loader.scss');

const mColors = Object.freeze({
  primary: '--primary',
  secondary: '--secondary',
});

const Linear = ({ className, ...otherProps }) => {
  const mColor = useSemanticProp('color', otherProps, Object.keys(mColors));

  const passedProps = useMemo(() => omit(otherProps, [
    ...Object.keys(mColors),
  ]), [otherProps]);

  return (
    <progress {...passedProps} className={cn('rc-linear', mColors[mColor], className)}>{''}</progress>
  );
};

Linear.displayName = 'Linear';
Linear.propTypes = {
  className: PropTypes.string,
};
Linear.defaultProps = {
  max: 100,
};

export default Linear;

