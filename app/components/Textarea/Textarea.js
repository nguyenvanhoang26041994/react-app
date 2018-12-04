import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './style/Textarea.scss';

const Textarea = ({ className, textareaRef, ...otherProps }) => (
  <textarea
    {...otherProps}
    ref={textareaRef}
    className={cn('rc-textarea', className)}
  />
);

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  className: PropTypes.string,
  textareaRef: PropTypes.any,
};
Textarea.defaultProps = {};

export default Textarea;
