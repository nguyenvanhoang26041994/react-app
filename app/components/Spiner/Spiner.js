import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../Icon';
import './style/Spiner.scss';

const Spiner = ({ className, spiner }) => (
  <div className={cn('rc-spiner', className)}>
    {spiner || <Icon icon="circle" />}
  </div>
);

Spiner.displayName = 'Spiner';
Spiner.propTypes = {
  className: PropTypes.string,
  spiner: PropTypes.node,
};
Spiner.defaultProps = {};

export default Spiner;
