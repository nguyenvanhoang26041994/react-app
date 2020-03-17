import React, { useRef, useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Textarea.scss');

const Textarea = ({ label, textareaRef, className, error, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = () => setIsFocus(true);
    const targetRef = ref.current.querySelector('textarea');
    targetRef.addEventListener('focus', handler);

    return () => targetRef.removeEventListener('focus', handler);
  }, []);

  const handleClickOutside = useCallback(() => setIsFocus(false), []);
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className={cn('rc-textarea', { '--focus': isFocus }, className)}>
      {error && (<div className="rc-textarea-error">{error}</div>)}
      <textarea ref={textareaRef} {...otherProps} />
      {label && (<label className="rc-textarea-label">{label}</label>)}
    </div>
  );
}

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  label: PropTypes.string,
  textareaRef: PropTypes.any,
  className: PropTypes.string,
  error: PropTypes.string,
};
Textarea.defaultProps = {};

export default Textarea;
