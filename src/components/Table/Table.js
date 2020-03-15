import React from 'react';
import cn from 'classnames';

import TR from './TR';
import TD from './TD';
import TH from './TH';
import THead from './THead';
import TBody from './TBody';
import TFoot from './TFoot';

require('./Table.scss');

const Table = ({ className, ...otherProps}) => {
  return (
    <table className={cn('rc-table', className)} {...otherProps} />
  )
};

Table.TR = TR;
Table.TD = TD;
Table.TH = TH;
Table.THead = THead;
Table.TBody = TBody;
Table.TFoot = TFoot;

export default Table;
