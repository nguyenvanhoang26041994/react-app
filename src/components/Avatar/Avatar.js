import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

require('./Avatar.scss');

const mShape = Object.freeze({
  square: '--square',
  circle: '--circle',
});

const Avatar = ({ className, src, style, name, fontSize, color, ...otherProps }) => {
  const shape = useSemanticProp('shape', otherProps, Object.keys(mShape));

  const passedProps = useMemo(() => omit(otherProps, [
    'shape',
    'square',
    'circle',
  ]), [otherProps]);

  return (
    <div
      className={cn('rc-avatar', { '--neumorphism': !src }, mShape[shape], className)}
      style={{
        ...style,
        fontSize,
        color,
        backgroundImage: `url(${src})`,
      }}
      {...passedProps}
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
  circle: PropTypes.bool,
  square: PropTypes.bool,
  name: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
Avatar.defaultProps = {};

export default Avatar;
