import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Heading.scss';

const H2 = ({ className, ...otherProps }) => (
  <h2 {...otherProps} className={cn('rc-heading rc-heading-h2', className)} />
);

H2.displayName = 'H2';
H2.propTypes = {
  className: PropTypes.string,
};
H2.defaultProps = {};

export default H2;
