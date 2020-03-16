import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Switch.scss');

const Switch = ({ switchRef, defaultChecked, className, ...otherProps }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const ref = useRef();

  useEffect(() => {
    const listener = e => setChecked(e.target.checked);
    const checkbox = ref.current.querySelector('input[type=checkbox]');

    checkbox.addEventListener('change', listener);
    return () => checkbox.removeEventListener('change', listener);
  }, []);

  return (
    <span className={cn('rc-switch', { '--checked': checked }, className)} ref={ref}>
      <input
        type="checkbox"
        className="rc-switch-input"
        ref={switchRef}
        defaultChecked={defaultChecked}
        {...otherProps}
      />
      <span className="rc-switch-inner" />
    </span>
  );
};

Switch.displayName = 'Switch';
Switch.propTypes = {
  switchRef: PropTypes.any,
  className: PropTypes.string,
};
Switch.defaultProps = {};

export default Switch;
