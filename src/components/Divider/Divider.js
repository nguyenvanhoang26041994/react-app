import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Divider.scss');

const Divider = ({ className }) => {
  return (
    <div className={cn('rc-divider', className)} />
  );
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: PropTypes.string,
};
Divider.defaultProps = {};

export default Divider;
