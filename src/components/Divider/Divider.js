import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Divider.scss');

const Divider = ({ className }) => {
  return (
    <div className={cn('rc-divider', className)} />
  );
};

export default Divider;
