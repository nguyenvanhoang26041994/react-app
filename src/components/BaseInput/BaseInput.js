import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';


const BaseInput = React.forwardRef(({ className, rounded, htmlType, ...otherProps }, ref) => {
  return (
    <input
      {...otherProps}
      ref={ref}
      className={cn('rc-input', { '--rounded': rounded }, className)}
      type={htmlType}
    />
  );
});

BaseInput.displayName = 'BaseInput';
BaseInput.propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.string,
  rounded: PropTypes.bool,
};
BaseInput.defaultProps = {
  htmlType: 'text',
};

export default BaseInput;
