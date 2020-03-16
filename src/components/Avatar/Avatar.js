import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Avatar.scss');

const mShape = Object.freeze({
  square: '--square',
  circle: '--circle',
});

const Avatar = ({ className, src, shape, style, name, ...otherProps }) => {
  return (
    <div
      className={cn('rc-avatar', { '--neumorphism': !src }, mShape[shape], className)}
      style={{
        ...style,
        backgroundImage: `url(${src})`,
      }}
      {...otherProps}
    >
      {(!src && name) && <span className="rc-avatar-name">{name[0].toUpperCase()}</span>}
    </div>
  );
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  shape: PropTypes.oneOf(Object.keys(mShape)),
  name: PropTypes.string,
};
Avatar.defaultProps = {
  shape: 'circle',
};

export default Avatar;
