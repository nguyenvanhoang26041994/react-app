import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Dot = ({ color, size, className }) => {
  return (
    <div style={{ fontSize: size, color }} className={cn('rc-loader-container', className)}>
      <div className={cn('rc-loader-dot', '--dot-1')}>{''}</div>
      <div className={cn('rc-loader-dot', '--dot-2')}>{''}</div>
      <div className={cn('rc-loader-dot', '--dot-3')}>{''}</div>
    </div>
  );
};

Dot.displayName = 'Dot';
Dot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
Dot.defaultProps = {};

export default Dot;
