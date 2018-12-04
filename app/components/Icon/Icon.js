/**
 * <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
 */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Icon.scss';

const sizes = {
  small: 'rc-icon--small',
  large: 'rc-icon--large',
};

const Icon = ({ className, size, icon, ...otherProps }) => (
  <span
    {...otherProps}
    className={cn(`rc-icon fa fa-${icon}`, sizes[size], className)}
  />
);

Icon.displayName = 'Icon';
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
};
Icon.defaultProps = {};

export default Icon;
