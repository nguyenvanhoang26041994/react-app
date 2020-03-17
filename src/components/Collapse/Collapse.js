import React, { useMemo, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Panel from './Panel';

require('./Collapse.scss');

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, defaultActiveKey, children, accordion, onChange, ...otherProps }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const activeKeyAsObject = useMemo(() => mapToObject(activeKey), [activeKey]);

  const defaultActiveKeyAsObject = useMemo(() => mapToObject(defaultActiveKey), [defaultActiveKey]);

  useEffect(() => {
    onChange(activeKey);
  }, [activeKey]);

  const onItemActiveChange = useCallback((key, active) => {
    if (active && accordion) {
      return setActiveKey([key]);
    }
  
    if (active) {
      return setActiveKey(prev => [...new Set([...prev, key])]);
    }

    return setActiveKey(prev => prev.filter(_key => _key !== key));
  }, []);

  return (
    <div className={cn('rc-collapse', className)} {...otherProps}>
      {React.Children.map(children, elm => {
        let injectProps = {};
        if (accordion) { // Mean Panel should be controlled component
          injectProps.active = activeKeyAsObject[elm.key];
        }
        return React.cloneElement(elm, {
          ...elm.props,
          defaultActive: defaultActiveKeyAsObject[elm.key],
          onChange: active => onItemActiveChange(elm.key, active),
          ...injectProps
        })
      })}
    </div>
  );
};

Collapse.Panel = Panel;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  defaultActiveKey: PropTypes.array,
  children: PropTypes.any,
  onChange: PropTypes.func,
  accordion: PropTypes.bool,
};
Collapse.defaultProps = {
  defaultActiveKey: [],
  onChange: f => f,
};

export default Collapse;
