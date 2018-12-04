/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Pagination.Total.scss';
import { isValid, calculatePage } from './utils';

const calculate = ({ total, page, pageSize }) => {
  const pageCount = calculatePage({ total, pageSize });
  const isOKay = isValid({ pageCount, page });

  const from = isOKay ? (page - 1) * pageSize + 1 : 0;
  const to = isOKay ? page * pageSize : 0;

  return {
    total,
    from,
    to: to > total ? total : to,
  };
};

const defaultRender = ({ total, from, to }) => ( // eslint-disable-line
  <div className={cn('rc-pagination-total')}>
    {from} - {to} of {total} records
  </div>
);

const Total = ({ render, ...otherProps }) => render(calculate(otherProps));

Total.displayName = 'Pagination.Total';
Total.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  render: PropTypes.func,
};
Total.defaultProps = {
  page: 0,
  pageSize: 0,
  total: 0,
  render: defaultRender,
};

export default Total;
