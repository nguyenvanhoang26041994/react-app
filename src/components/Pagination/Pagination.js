import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Pagination.scss');

const Pagination = ({ className, total, pageSize }) => {
  const itemCount = useMemo(() => Math.round(total / pageSize), [total, pageSize]);

  return (
    <ul
      className={cn(
        'rc-pagination',
        className,
      )}
    >
      <li className="rc-pagination-prev"><Icon name="plus" /></li>
      <li className="rc-pagination-item"><span>1</span></li>
      <li className="rc-pagination-item"><span>2</span></li>
      <li className="rc-pagination-item"><span>3</span></li>
      <li className="rc-pagination-item"><span>4</span></li>
      <li className="rc-pagination-next"><Icon name="plus" /></li>
    </ul>
  );
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  pageSize: PropTypes.number,
};
Pagination.defaultProps = {
  total: 0,
  pageSize: 0,
};

export default Pagination;
