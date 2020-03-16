import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Portal from '../Portal';
import Option from './Option';

import usePosition from '../../hooks/usePosition';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useSupportCloseAnimation from '../../hooks/useSupportCloseAnimation';

require('./Select.scss');

const mapToObject = arr => arr.reduce((rs, item) => {
  rs[item.props.value] = item.props.children;
  return rs;
}, {});

const Select = ({ className, label, children, defaultValue, error, placeholder, onChange, ...otherProps }) => {
  const [value, setValue] = useState(defaultValue);
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const dropdownRef = useRef();

  const toggleIsDrop = useCallback(() => setIsDrop(prev => !prev), [setIsDrop]);
  const handleOptionSelected = useCallback(val => {
    setValue(val);
    setIsDrop(false);
  }, [setValue, setIsDrop]);

  const handleClickOutside = useCallback(e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDrop(false);
    }
  }, [ref, setIsDrop]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  useOnClickOutside(ref, handleClickOutside);
  const delayIsDrop = useSupportCloseAnimation(isDrop);
  const options = useMemo(() => mapToObject(React.Children.toArray(children)), [children]);

  const { pageX, pageY, clientWidth } = usePosition(ref, [isDrop]);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={cn('rc-select', { '--drop': isDrop, '--close-animation': !isDrop }, className)}
        {...otherProps}
      >
        {error && (<div className="rc-select-error">{error}</div>)}
        <div className="rc-select-input" onClick={toggleIsDrop}>
          {options[value] || (<span className="rc-select-input-placeholder">{placeholder}</span>)}
          <Icon name="chevron-down" className="rc-select-icon" />
        </div>
        {label && (<label className="rc-select-label">{label}</label>)}
      </div>
      {delayIsDrop && (
        <Portal>
          <div
            ref={dropdownRef}
            className={cn('rc-select-dropdown', { '--close-animation': !isDrop })}
            style={{ left: pageX, top: pageY, width: clientWidth }}
          >
            <ul>
              {React.Children.map(children, elm => {
                if (!React.isValidElement(elm)) {
                  return null;
                }
                return React.cloneElement(elm, {
                  selected: value === elm.props.value,
                  onClick: () => handleOptionSelected(elm.props.value),
                });
              })}
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
};
Select.defaultProps = {
  onChange: f => f,
};

Select.Option = Option;

export default Select;
