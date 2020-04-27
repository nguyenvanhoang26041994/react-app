import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Wave = ({ color, size, className, ...otherProps }) => {
  return (
    <div
      style={{ fontSize: size, color }}
      className={cn('rc-loader-dots-wave', className)}
      {...otherProps}
    >
      <div className="rc-loader-dot-wave --dot-1" />
      <div className="rc-loader-dot-wave --dot-2" />
      <div className="rc-loader-dot-wave --dot-3" />
      <div className="rc-loader-dot-wave --dot-4" />
    </div>
  );
};

Wave.displayName = 'Loader.Wave';
Wave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
Wave.defaultProps = {};

export default Wave;
