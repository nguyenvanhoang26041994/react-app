import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Handler = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('rc-slider-handler', className)}
      {...otherProps}
    >
    </span>
  )
});

export default Handler;
