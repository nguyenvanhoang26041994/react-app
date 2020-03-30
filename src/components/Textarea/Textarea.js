import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Textarea.scss');

const Textarea = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <textarea
      {...otherProps}
      ref={ref}
      className={cn('rc-textarea', className)}
    />
  );
});

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  className: PropTypes.string,
};
Textarea.defaultProps = {};

export default Textarea;
