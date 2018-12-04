import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Heading.scss';

const H6 = ({ className, ...otherProps }) => (
  <h6 {...otherProps} className={cn('rc-heading rc-heading-h6', className)} />
);

H6.displayName = 'H6';
H6.propTypes = {
  className: PropTypes.string,
};
H6.defaultProps = {};

export default H6;
