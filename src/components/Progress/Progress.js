import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Progress.scss');

const Progress = ({ className }) => {
  return (
    <div className={cn('rc-progress', className)}></div>
  );
};

export default Progress;
