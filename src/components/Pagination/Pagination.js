import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Pagination.scss');

const times = (n, cb) => {
  const rs = [];
  for (let i = 0; i < n; i++) {
    rs.push(cb(i));
  }
  return rs;
};

const Pagination = ({ className, total, pageSize, defaultCurrentPage }) => {
  const itemCount = useMemo(() => Math.round(total / pageSize), [total, pageSize]);
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  const onNextItems = useCallback(() => {}, []);
  const onPrevItems = useCallback(() => {}, []);

  return (
    <ul
      className={cn(
        'rc-pagination',
        className,
      )}
    >
      <li className="rc-pagination-prev" onClick={onPrevItems}>
        <a><Icon name="chevron-circle-left" /></a>
      </li>
        {times(itemCount, (i) => (
          <li
            key={i}
            className={
              cn(
                'rc-pagination-item',
                {
                  'rc-pagination-item--active': i + 1 === currentPage,
                }
              )
            }
            onClick={() => setCurrentPage(i + 1)}
          >
            <a>{i + 1}</a>
          </li>
        ))}
      <li className="rc-pagination-next" onClick={onNextItems}>
        <a><Icon name="chevron-circle-right" /></a>
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
};
Pagination.defaultProps = {
  defaultCurrentPage: 1,
  total: 0,
  pageSize: 0,
};

export default Pagination;
