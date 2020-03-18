import React, { useEffect, useState, useMemo, useCallback } from 'react';
import cn from 'classnames';

require('./TR.scss');

const defaultExpander = f => f;

const TR = ({ className, isHeader, isFooter, expander, belongBody, ...otherProps}) => {
  const _expander = useMemo(() => expander || defaultExpander, []);

  return (
    <React.Fragment>
       <tr className={cn('rc-table-tr', { '--header': isHeader, '--footer': isFooter }, className)} {...otherProps} />
      {(expander || belongBody) && (
        <tr className="rc-table-tr-expander" style={{ height: '0.15em' }}>
          <td colSpan={1000}>
            {_expander()}
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default TR;
