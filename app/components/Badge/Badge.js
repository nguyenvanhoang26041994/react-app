import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Badge.scss';

const Badge = ({ className, children, ...otherProps }) => (
  <div className={cn('rc-badge')} {...otherProps}>
    {children}
  </div>
);

Badge.displayName = 'Badge';
Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Badge.defaultProps = {};

export default Badge;
