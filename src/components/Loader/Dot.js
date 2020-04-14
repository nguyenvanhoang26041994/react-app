import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Dot = ({ color, size, className, ...otherProps }) => {
  return (
    <div
      style={{ fontSize: size, color }}
      className={cn('rc-loader-dots', className)}
      {...otherProps}
    >
      <div className="rc-loader-dot --dot-1" />
      <div className="rc-loader-dot --dot-2" />
      <div className="rc-loader-dot --dot-3" />
    </div>
  );
};

Dot.displayName = 'Loader.Dot';
Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
Dot.defaultProps = {};

export default Dot;
