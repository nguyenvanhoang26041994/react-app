import React from 'react';
import cn from 'classnames';

require('./TH.scss');

const TH = ({ className, ...otherProps}) => {
  return (
    <th className={cn('rc-table-th', className)} {...otherProps} />
  )
};

TH.displayName = 'Table.TH';

export default TH;
