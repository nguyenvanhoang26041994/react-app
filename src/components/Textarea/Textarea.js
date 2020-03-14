import React, { useRef, useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Textarea.scss');

const mSizes = Object.freeze({
  small: 'rc-textarea--small',
  large: 'rc-textarea--large',
});

const Textarea = ({ type, label, textareaRef, className, error, onFocus, size, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef();

  const _onFocus = useCallback(e => {
    onFocus(e);
    setIsFocus(true);
  }, [onFocus, setIsFocus]);

  const handleClickOutside = useCallback(() => setIsFocus(false), [setIsFocus]);

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className={cn(
        'rc-textarea',
        mSizes[size],
        {
          'rc-textarea--focus': isFocus,
        },
        className,
      )}
    >
      {error && (<div className="rc-textarea-error">{error}</div>)}
      <textarea
        onFocus={_onFocus}
        ref={textareaRef}
        {...otherProps}
      />
      {label && (<label className="rc-textarea-label">{label}</label>)}
    </div>
  );
}

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  onFocus: PropTypes.func,
};
Textarea.defaultProps = {
  onFocus: f => f,
};
export default Textarea;
