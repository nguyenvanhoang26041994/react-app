import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import usePagination from './usePagination';

require('./Pagination.scss');

const loop = (start, end, cb) => {
  const rs = [];
  for (let i = start; i <= end; i++) {
    rs.push(cb(i));
  }
  return rs;
};

const Pagination = ({ className, total, pageSize, max, activePage, onChange, ...otherProps }) => {
  const {
    activeFlag,
    startIndex,
    endIndex,
    maxActiveFlag,
    onNextItems,
    onPrevItems,
  } = usePagination({ total, pageSize, max, activePage });

  return (
    <ButtonGroup className={cn('rc-pagination', className )} {...otherProps}>
      <Button
        className="rc-pagination-prev"
        disabled={activeFlag <= 1}
        onClick={onPrevItems}
        icon="chevron-left"
      />
        {loop(startIndex, endIndex, pageNumber => (
          <Button
            key={pageNumber}
            className={cn('rc-pagination-item', { '--active': pageNumber === activePage })}
            onClick={() => onChange(pageNumber)}
          >
            <a>{pageNumber}</a>
          </Button>
        ))}
      <Button
        className="rc-pagination-next"
        disabled={activeFlag >= maxActiveFlag}
        onClick={onNextItems}
        icon="chevron-right"
      />
    </ButtonGroup>
  );
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  activePage: PropTypes.number,
};
Pagination.defaultProps = {
  total: 0,
  pageSize: 0,
  max: 5,
  onChange: f => f,
};

export default Pagination;
