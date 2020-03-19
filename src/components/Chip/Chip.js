import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Chip.scss');

const Chip = ({ className, label, icon, avatar, closable, ...otherProps }) => {
  return (
    <div className={cn('rc-chip', className)} {...otherProps}>
      {avatar}
      {label}
      {closable && <Icon name="times" />}
    </div>
  );
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any,
  closable: PropTypes.bool,
};
Chip.defaultProps = {};

export default Chip;
