import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Portal from '../Portal';
import Option from './Option';

import usePosition from '../../hooks/usePosition';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';
import useFlexibleRef from '../../hooks/useFlexibleRef';

require('./Select.scss');

const mapToObject = arr => arr.reduce((rs, item) => {
  rs[item.props.value] = item.props.children;
  return rs;
}, {});

const Select = ({ className, label, selectRef, children, name, defaultValue, error, placeholder, onChange, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('value'), []);

  const [_value, setValue] = useState(isControlled ? otherProps.value : defaultValue);
  const [isDrop, setIsDrop] = useState(false);

  const ref = useFlexibleRef(selectRef);
  const dropdownRef = useRef();

  const toggleIsDrop = useCallback(() => setIsDrop(prev => !prev), []);
  const handleOptionSelected = useCallback(val => {
    if (isControlled) {
      onChange(val);
    } else {
      setValue(val);
    }
    setIsDrop(false);
  }, []);

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
  const handleClickOutside = useCallback(e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDrop(false);
    }
  }, [dropdownRef]);

  // SUPPORT CONTROLED COMPONENT
  useEffect(() => {
    onChange(_value);
  }, [_value]);

  useMemo(() => {
    if (isControlled) {
      setValue(otherProps.value);
    }
  }, [otherProps.value]);

  useOnClickOutside(ref, handleClickOutside);
  const delayIsDrop = useSupportCloseAnimation(isDrop);
  const options = useMemo(() => mapToObject(React.Children.toArray(children)), [children]);

  const { pageX, pageY, clientWidth } = usePosition(ref, [isDrop]);

  return (
    <React.Fragment>
      <div
        {...otherProps}
        ref={ref}
        name={name}
        className={cn('rc-select', { '--drop': isDrop, '--close-animation': !isDrop }, className)}
        value={_value}
      >
        {error && (<div className="rc-select-error">{error}</div>)}
        <div className="rc-select-input" onClick={toggleIsDrop}>
          {options[_value] || (<span className="rc-select-input-placeholder">{placeholder}</span>)}
          <Icon name="caret-down" className="rc-select-icon" />
        </div>
        {label && (<label className="rc-select-label">{label}</label>)}
      </div>
      {delayIsDrop && (
        <Portal>
          <div
            ref={dropdownRef}
            className={cn('rc-select-dropdown', { '--close-animation': !isDrop })}
            style={{ left: pageX, top: pageY, minWidth: clientWidth }}
          >
            <ul>
              {React.Children.map(children, elm => React.cloneElement(elm, {
                selected: _value === elm.props.value,
                onClick: () => handleOptionSelected(elm.props.value),
                ...elm.props
              }))}
            </ul>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.any,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};
Select.defaultProps = {
  onChange: f => f,
};

Select.Option = Option;

export default Select;
