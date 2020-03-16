import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import svgs from './svg';

require('./Icon.scss');

const Fallback = () => null;

const Icon = ({ name, className, ...otherProps }) => {
  const I = useMemo(() => svgs[name] || Fallback, [name]);

  return (
    <I className={cn('rc-icon', `rc-icon-${name}`, className)} {...otherProps} />
  );
};

Icon.displayName = 'Icon';
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
Icon.defaultProps = {};

export default Icon;
