import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Dot = ({ color, size, className }) => {
  return (
    <div style={{ fontSize: size }} className="rc-loader-container">
      <div style={{ backgroundColor: color }} className={cn('rc-loader-dot', '--dot-1', className)}>{''}</div>
      <div style={{ backgroundColor: color }} className={cn('rc-loader-dot', '--dot-2', className)}>{''}</div>
      <div style={{ backgroundColor: color }} className={cn('rc-loader-dot', '--dot-3', className)}>{''}</div>
    </div>
  );
};

Dot.displayName = 'Dot';
Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
Dot.defaultProps = {
  size: '1.125rem',
};

export default Dot;
