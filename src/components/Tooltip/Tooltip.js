import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Overlay from '../Overlay';

require('./Tooltip.scss');

const Tooltip = ({ className, children, label, ...otherProps }) => {
  return (
    <Overlay
      arrow
      trigger={['hover']}
      {...otherProps}
      overlay={label}
      className={cn('rc-tooltip', className)}
      gap={10}
    >
      {children}
    </Overlay>
  );
};

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
};
Tooltip.defaultProps = {
  placement: 'top',
  gap: 15,
};

export default Tooltip;
