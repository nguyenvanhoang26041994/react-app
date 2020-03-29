import React, { useCallback, useState, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Item.scss');

const Item = ({ className, title, children, active, toggleActive, disabled, icon, ...otherProps }) => {
  const [contentStyle, contentRef] = useCollapseStyle(active);
  const _toggleActive = useCallback((e) => {
    if (disabled) {
      return;
    }
    return toggleActive(e);
  }, [disabled]);

  return (
    <div
      {...otherProps}
      className={cn('rc-panel', { '--active': active, '--inactive': !active, '--disabled': disabled }, className)}
    >
      <div className="rc-panel-title" onClick={_toggleActive}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon && <Icon name={icon} style={{ marginRight: '1rem' }} />}
          {title}
        </div>
        <Icon className="rc-panel-icon" name="caret-down" />
      </div>
      <div
        ref={contentRef}
        className="rc-panel-content"
        style={contentStyle}
      >
        <div className="rc-panel-box">
          {children}
        </div>
      </div>
    </div>
  );
};

Item.displayName = 'Collapse.Item';
Item.propTypes = {
  title: PropTypes.any.isRequired,
  className: PropTypes.string,
  defaultActive: PropTypes.bool,
  toggleActive: PropTypes.func,
  children: PropTypes.any,
  icon: PropTypes.string,
};
Item.defaultProps = {
  toggleActive: f => f,
};

export default Item;

/**
 * 
 * When active style = { height: 0, opacity: 0 } => {height: contentHeight, opacity: 1 } => {}
 * When inactive style = { height: contentHeight, opacity: 1 } => {  height: 0, opacity: 0 } => { display: 'none' }
 * 
 */
function useCollapseStyle(active) {
  const [style, setStyle] = useState({});
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef();

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [contentHeight]);

  useLayoutEffect(() => {
    let begin;
    let next;
    let end;

    if (active) {
      begin = setTimeout(() => setStyle({
        opacity: 0,
        height: 0,
      }));

      next = setTimeout(() => setStyle({
        opacity: 1,
        height: contentHeight,
      }), 100);
    
      end = setTimeout(() => setStyle({}), 600);
    } else {
      begin = setTimeout(() => setStyle({
        opacity: 1,
        height: contentHeight,
      }));
    
      next = setTimeout(() => setStyle({
        opacity: 1,
        height: 0,
      }), 100);
    
      end = setTimeout(() => setStyle({
        display: 'none',
      }), 600);
    }

    return () => {
      clearTimeout(begin);
      clearTimeout(next);
      clearTimeout(end);
    }
  }
  , [active, contentHeight]);

  return [style, contentRef];
}
