import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Menu from '../Menu';
import Overlay from '../Overlay';

require('./Select.scss');

const Select = ({ className, children, placement, placeholder, ...otherProps }) => {
  const [selectWidth, sestSelectWidth] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [value, setValue] = useState();
  const [_shape, _setShape] = useState({});
  const ref = useRef();

  useLayoutEffect(() => {
    sestSelectWidth(ref.current.clientWidth);
  }, []);

  const onToggleDrop = useCallback(() => setIsDrop(prev => !prev), []);
  const onItemClick = useCallback((key, itemProps) => {
    setValue(key);
    _setShape(itemProps);
    setIsDrop(false);
  }, []);

  const onVisibleChange = useCallback(visible => {
    if (!visible) {
      setIsDrop(false);
    }
  }, []);

  const renderValue = useCallback(() => {
    if (!value) {
      return (
        <span className="rc-select-input-placeholder">{placeholder}</span>
      )
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {_shape.icon && <Icon name={_shape.icon} style={{ marginRight: '0.75rem' }} />}
        <span>{_shape.title}</span>
      </div>
    )
  }, [value, _shape, placeholder]);

  return (
    <Overlay
      visible={isDrop}
      onVisibleChange={onVisibleChange}
      canOutsideClickClose
      placement={placement}
      trigger={[]}
      overlay={(
        <Menu
          selectedKeys={[value]}
          className="rc-select-dropdown"
          style={{
            width: selectWidth,
          }}
          onItemClick={onItemClick}
        >
          {children}
        </Menu>
      )}
    >
      <div className="rc-select-container">
        <div
          {...otherProps}
          ref={ref}
          className={cn('rc-select', { '--is-drop': isDrop }, className)}
          onClick={onToggleDrop}
        >
          <div className="rc-select-input">
            {renderValue()}
          </div>
          <Icon name="caret-down" className="rc-select-icon" />
        </div>
      </div>
    </Overlay>
  );
};

Select.Option = Menu.Item;
Select.Group = Menu.ItemGroup;

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.string,
};
Select.defaultProps = {
  placement: 'bottom-left',
};

export default Select;
