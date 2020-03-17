import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Textbox.scss');

const Textbox = ({ htmlType, placeholder, label, className, error, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = () => setIsFocus(true);
    const targetRef = ref.current.querySelector('input');
    targetRef.addEventListener('focus', handler);

    return () => targetRef.removeEventListener('focus', handler);
  }, []);

  const handleClickOutside = useCallback(() => setIsFocus(false), []);
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className={cn('rc-textbox', { '--focus': isFocus }, className)}
    >
      {error && (<div className="rc-textbox-error">{error}</div>)}
      <input
        type={htmlType}
        placeholder={placeholder}
        {...otherProps}
      />
      {label && (<label className="rc-textbox-label">{label}</label>)}
    </div>
  );
};

Textbox.displayName = 'Textbox';
Textbox.propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};
Textbox.defaultProps = {
  htmlType: 'text',
};

export default Textbox;
