import React, { useCallback, useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Button from '../Button';

require('./Panel.scss');

const Panel = ({ className, header, children, defaultActive, ...otherProps }) => {
  const [active, setActive] = useState(defaultActive);
  const handleToggle = useCallback(() => setActive(prev => !prev));

  const [contentStyle,_ , contentRef] = useCollapseStyle(active)

  return (
    <div
      {...otherProps}
      className={cn('rc-collapse-panel', { '--active': active, '--inactive': !active }, className)}
    >
      <div className="rc-collapse-panel-header" onClick={handleToggle}>
        <span>{header}</span>
        <Button className="rc-collapse-panel-icon" circle transparent>
          <Icon name="chevron-down" />
        </Button>
      </div>
      <div
        ref={contentRef}
        className="rc-collapse-panel-content"
        style={contentStyle}
      >
        <div className="rc-collapse-panel-box">
          {children}
        </div>
      </div>
    </div>
  );
};

Panel.displayName = 'Panel';
Panel.propTypes = {
  header: PropTypes.any.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  defaultActive: PropTypes.bool,
};
Panel.defaultProps = {};

export default Panel;

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

  useEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, []);

  useEffect(() => {
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
  , [active]);

  return [style, contentHeight, contentRef];
}
