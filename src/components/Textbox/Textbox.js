import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Textbox.scss');

const mSizes = Object.freeze({
  small: 'rc-textbox--small',
  large: 'rc-textbox--large',
});

const Textbox = ({ type, placeholder, label, className, error, require, onFocus, size, ...otherProps }) => {
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
        'rc-textbox',
        mSizes[size],
        {
          'rc-textbox--focus': isFocus,
        },
        className,
      )}
    >
      {error && (<div className="rc-textbox-error">{error}</div>)}
      <input
        type={type}
        placeholder={placeholder}
        onFocus={_onFocus}
        require={require}
        {...otherProps}
      />
      {label && (<label className="rc-textbox-label">{label}</label>)}
    </div>
  );
};

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(mSizes)),
  type: PropTypes.string,
  onFocus: PropTypes.func,
};
Textbox.defaultProps = {
  type: 'text',
  onFocus: f => f,
};

export default Textbox;
