import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Pagination.scss');

const loop = (start, end, cb) => {
  const rs = [];
  for (let i = start; i <= end; i++) {
    rs.push(cb(i));
  }
  return rs;
};

const Pagination = ({ className, total, pageSize, max, defaultCurrentPage, onPageChange }) => {
  const itemCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [currentFlag, setCurrentFlag] = useState(Math.ceil(defaultCurrentPage / max));
  const maxCurrentFlag = useMemo(() => Math.ceil(itemCount / max), [itemCount, max]);

  const startIndex = useMemo(() => (currentFlag - 1) * max + 1, [currentFlag, currentPage, max]);
  const endIndex = useMemo(() => {
    let end = (currentFlag - 1) * max + max;

    return itemCount < end ? itemCount : end;
  }, [currentFlag, currentPage, max]);

  const onNextItems = useCallback(() => setCurrentFlag(prev => {
    const nextState = prev + 1;
    return nextState > maxCurrentFlag ? maxCurrentFlag : nextState;
  }), [setCurrentFlag, maxCurrentFlag]);

  const onPrevItems = useCallback(() => setCurrentFlag(prev => {
    const nextState = prev - 1;
    return nextState > 1 ? nextState : 1;
  }), [setCurrentFlag]);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <ul
      className={cn(
        'rc-pagination',
        className,
      )}
    >
      <li
        className={cn('rc-pagination-prev', { 'rc-pagination-prev--hidden': currentFlag <= 1 })}
        onClick={onPrevItems}
      >
        <a><Icon name="chevron-left" /></a>
      </li>
        {loop(startIndex, endIndex, pageNumber => (
          <li
            key={pageNumber}
            className={
              cn(
                'rc-pagination-item',
                {
                  'rc-pagination-item--active': pageNumber === currentPage,
                }
              )
            }
            onClick={() => setCurrentPage(pageNumber)}
          >
            <a>{pageNumber}</a>
          </li>
        ))}
      <li
        className={cn('rc-pagination-next', { 'rc-pagination-next--hidden': currentFlag >= maxCurrentFlag })}
        onClick={onNextItems}
      >
        <a><Icon name="chevron-right" /></a>
      </li>
    </ul>
  );
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  defaultCurrentPage: PropTypes.number,
  max: PropTypes.number,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  defaultCurrentPage: 1,
  total: 0,
  pageSize: 0,
  max: 5,
  onPageChange: f => f,
};

export default Pagination;
