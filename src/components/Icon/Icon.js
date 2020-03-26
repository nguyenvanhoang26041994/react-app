import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import svgs from './svg';

require('./Icon.scss');

const Fallback = () => null;

const Icon = ({ name, className, style, color, fontSize, ...otherProps }) => {
  const I = useMemo(() => svgs[name] || Fallback, [name]);

  return (
    <I
      className={cn('rc-icon', `rc-icon-${name}`, className)}
      style={{
        color: color || null,
        fontSize: fontSize || null,
        ...style
      }}
      {...otherProps}
    />
  );
};

Icon.displayName = 'Icon';
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};
Icon.defaultProps = {};

export default Icon;
