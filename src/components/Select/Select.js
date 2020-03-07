import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Button from '../Button';

import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Select.scss');

const mSizes = Object.freeze({
  small: 'rc-select--small',
  large: 'rc-select--large',
});

const Select = ({ className, size, label, ...otherProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef();

  const _onFocus = useCallback(e => {
    setIsFocus(true);
  }, [setIsFocus]);

  const handleClickOutside = useCallback(() => setIsFocus(false), [setIsFocus]);

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className={cn('rc-select', { 'rc-select--focus': isFocus }, mSizes[size], className)}
      {...otherProps}
    >
      <div className="rc-select-input" onClick={_onFocus}>
        <div className="rc-select-dropdown">
          <Icon name="chevron-down" />
        </div>
      </div>
      <label className="rc-select-label">
        {label}
      </label>
    </div>
  );
}

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(mSizes)),
};
Select.defaultProps = {};

export default Select;
