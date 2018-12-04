/* eslint-disable jsx-a11y/alt-text, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Avatar.scss';

export const sizes = Object.freeze({
  small: 'rc-avatar--small',
  large: 'rc-avatar--large',
});

export const shapes = Object.freeze({
  square: 'rc-avatar--square',
  circle: 'rc-avatar--circle',
});

const Avatar = ({
  className,
  size,
  name,
  color,
  shape,
  icon,
  style,
  onClick,
  ...otherProps
}) => (
  <div
    className={cn('rc-avatar', sizes[size], shapes[shape], className)}
    style={{
      backgroundColor: color,
      height: !sizes[size] ? size : null,
      width: !sizes[size] ? size : null,
      ...style,
    }}
    onClick={onClick}
  >
    {icon || (
      <React.Fragment>
        <span className="rc-avatar__name">{name ? name[0] : ''}</span>
        <img {...otherProps} />
      </React.Fragment>
    )}
  </div>
);

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([Object.keys(sizes)]),
    PropTypes.string,
    PropTypes.number,
  ]),
  shape: PropTypes.oneOf(Object.keys(shapes)),
  onClick: PropTypes.func,
};
Avatar.defaultProps = {
  shape: 'circle',
};

export default Avatar;
