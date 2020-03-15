import React from 'react';
import cn from 'classnames';

require('./THead.scss');

const THead = ({ className, ...otherProps}) => {
  return (
    <thead className={cn('rc-table-thead', className)} {...otherProps} />
  )
};

export default THead;
