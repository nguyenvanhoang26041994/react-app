import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Overlay from '../Overlay';

const Popover = ({ className, overlayClass, children, trigger, gap, ...otherProps }) => {
  return (
   <Overlay
      arrow
      className={className}
      overlayClass={cn('rc-popover', overlayClass)}
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
  overlayClass: PropTypes.string,
  trigger: PropTypes.array,
  gap: PropTypes.number,
};
Popover.defaultProps = {
  trigger: ['click'],
  gap: 10,
};

export default Popover;
