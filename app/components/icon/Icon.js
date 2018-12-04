import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const sizes = {
  small: 'rc-icon-sm',
  large: 'rc-icon-lg',
};

const Icon = ({ className, size, icon, ...otherProps }) => (
  <span
    className={cn('rc-icon', `rc-icon-${icon}`, sizes[size], className)}
    {...otherProps}
  />
);

Icon.displayName = 'Icon';
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};
Icon.defaultProps = {};

export default Icon;
