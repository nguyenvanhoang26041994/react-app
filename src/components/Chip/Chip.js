import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Chip.scss');

const Chip = ({ className, label, avatar, color, style, closable, ...otherProps }) => {
  return (
    <div className={cn('rc-chip', className)} {...otherProps} style={{ backgroundColor: color, ...style }}>
      {avatar}
      <span className="rc-chip-label">{label}</span>
      {closable && <div className="rc-chip-close"><Icon name="times" /></div>}
    </div>
  );
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any,
  closable: PropTypes.bool,
  avatar: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.object,
};
Chip.defaultProps = {};

export default Chip;
