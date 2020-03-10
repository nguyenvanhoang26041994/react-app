import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Switch.scss');

const Switch = ({ switchRef, className, ...otherProps }) => {
  const [checked, setChecked] = useState();
  const ref = useRef();

  useEffect(() => {
    const listener = e => setChecked(e.target.checked);
    const checkbox = ref.current.querySelector('input[type=checkbox]');
    setChecked(checkbox.checked);

    checkbox.addEventListener('change', listener);
    return () => checkbox.removeEventListener('change', listener);
  }, []);

  return (
    <span className={cn('rc-switch', { 'rc-switch--checked': checked }, className)} ref={ref}>
      <input
        type="checkbox"
        className="rc-switch-input"
        ref={switchRef}
        {...otherProps}
      />
      <span className="rc-switch-inner" />
    </span>
  );
};

Switch.displayName = 'Switch';
Switch.propTypes = {};
Switch.defaultProps = {};

export default Switch;
