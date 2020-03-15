import React, { useEffect, useState, useMemo } from 'react';
import cn from 'classnames';

require('./TR.scss');

const isArray = value => Array.isArray(value);

const TR = ({ className, isHeader, isFooter, ...otherProps}) => {
  return (
    <tr className={cn('rc-table-tr', { 'rc-table-tr--header': isHeader, 'rc-table-tr--footer': isFooter }, className)} {...otherProps} />
  );
};

export default TR;
