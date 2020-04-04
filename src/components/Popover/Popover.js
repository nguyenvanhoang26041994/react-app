import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';

const Popover = ({ className, children, trigger, gap, ...otherProps }) => {
  return (
   <Overlay
      arrow
      className={cn('rc-popover', className)}
      trigger={trigger}
      gap={gap}
      canOutsideClickClose
      {...otherProps}
    >
     {children}
   </Overlay>
  );
};

Popover.displayName = 'Popover';
Popover.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.array,
  gap: PropTypes.number,
};
Popover.defaultProps = {
  trigger: ['click'],
  gap: 10,
};

export default Popover;
