import React from 'react';
import cn from 'classnames';

require('./TFoot.scss');

const TFoot = ({ className, ...otherProps}) => {
  return (
    <tfoot className={cn('rc-table-tfoot', className)} {...otherProps} />
  )
};

export default TFoot;
