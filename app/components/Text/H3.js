import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Heading.scss';

const H3 = ({ className, ...otherProps }) => (
  <h3 {...otherProps} className={cn('rc-heading rc-heading-h3', className)} />
);

H3.displayName = 'H3';
H3.propTypes = {
  className: PropTypes.string,
};
H3.defaultProps = {};

export default H3;
