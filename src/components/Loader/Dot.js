import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Dot = ({ color, size, className, wave, ...otherProps }) => {
  return (
    <div
      style={{ fontSize: size, color }}
      className={cn('rc-loader-dots', className)}
      {...otherProps}
    >
      <div className={cn('rc-loader-dot --dot-1', { '--wave': wave })}/>
      <div className={cn('rc-loader-dot --dot-2', { '--wave': wave })} />
      <div className={cn('rc-loader-dot --dot-3', { '--wave': wave })} />
    </div>
  );
};

Dot.displayName = 'Loader.Dot';
Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  wave: PropTypes.bool,
};
Dot.defaultProps = {};

export default Dot;
