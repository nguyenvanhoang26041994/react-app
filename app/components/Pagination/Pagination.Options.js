/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Select from '../Select';
import './style/Pagination.Options.scss';

const Options = ({ className, options, ...otherProps }) => (
  <Select className={cn('rc-pagination-options', className)} {...otherProps}>
    {options.map((option, idx) => (
      <Select.Option key={idx} value={option}>
        {option} / page
      </Select.Option>
    ))}
  </Select>
);

Options.displayName = 'Pagination.Options';
Options.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
};
Options.defaultProps = {
  options: [5, 10, 20, 30, 40, 50],
};

export default Options;
