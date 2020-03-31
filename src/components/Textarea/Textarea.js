import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Textarea.scss');

const Textarea = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <div className="rc-textarea-container">
      <textarea
        {...otherProps}
        ref={ref}
        className={cn('rc-textarea', className)}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  className: PropTypes.string,
};
Textarea.defaultProps = {};

export default Textarea;
