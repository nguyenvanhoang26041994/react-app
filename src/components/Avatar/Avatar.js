import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Avatar.scss');

const mShape = Object.freeze({
  square: 'rc-avatar--square',
  circle: 'rc-avatar--circle',
});

const Avatar = ({ className, src, shape }) => {
  return (
    <div
      className={cn('rc-avatar', mShape[shape], className)}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.oneOf(Object.keys(mShape)),
};
Avatar.defaultProps = {
  shape: 'circle',
};

export default Avatar;
