import React, { useCallback, useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Portal from '../Portal';

import usePosition from '../../hooks/usePosition';
import useOnClickOutside from '../../hooks/useOnClickOutside';

require('./Select.scss');

const Select = ({ className, label, ...otherProps }) => {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useRef();
  const dropdownRef = useRef();

  const toggleIsDrop = useCallback(() => setIsDrop(prev => !prev), [setIsDrop]);

  const handleClickOutside = useCallback(e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDrop(false);
    }
  }, [ref, setIsDrop]);

  useOnClickOutside(ref, handleClickOutside);

  const { pageX, pageY, clientHeight, clientWidth } = usePosition(ref);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={cn(
          'rc-select',
          {
            'rc-select--drop': isDrop,
          },
          className,
        )}
        {...otherProps}
      >
        <div className="rc-select-input" onClick={toggleIsDrop}>
          <Icon name="chevron-down" className="rc-select-icon" />
        </div>
        {label && (<label className="rc-select-label">{label}</label>)}
      </div>
      {isDrop && (
        <Portal>
          <div
            ref={dropdownRef}
            className="rc-select-dropdown"
            style={{ left: pageX, top: pageY, width: clientWidth }}
          >
            <ul>
              <li className="rc-select-option">Option 1</li>
              <li className="rc-select-option">Option 2</li>
              <li className="rc-select-option">Option 3</li>
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
};
Select.defaultProps = {};

export default Select;
