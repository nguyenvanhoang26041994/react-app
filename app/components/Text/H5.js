import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Heading.scss';

const H5 = ({ className, ...otherProps }) => (
  <h5 {...otherProps} className={cn('rc-heading rc-heading-h5', className)} />
);

H5.displayName = 'H5';
H5.propTypes = {
  className: PropTypes.string,
};
H5.defaultProps = {};

export default H5;
