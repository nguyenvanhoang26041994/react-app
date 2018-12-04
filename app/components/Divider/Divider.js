import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Divider.scss';

const Divider = ({ className }) => (
  <div className={cn('rc-divider', className)} />
);

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: PropTypes.string,
};
Divider.defaultProps = {};

export default Divider;
