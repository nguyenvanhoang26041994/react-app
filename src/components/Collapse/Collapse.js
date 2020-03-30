import React, { useMemo, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import useUncontrolled from '../../hooks/useUncontrolled';

require('./Collapse.scss');

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, defaultActivePanels, onActivePanelsChange, onPanelClick, children, accordion, ...otherProps }) => {
  const [activePanels, setActivePanels, isControlled] = useUncontrolled('activePanels', otherProps, {
    defaultState: defaultActivePanels,
    onChangeState: onActivePanelsChange,
  });

  const activePanelsAsObject = useMemo(() => mapToObject(activePanels), [activePanels]);

  const _onPanelClick = useCallback((key) => {
    if (isControlled) {
      return onPanelClick(key);
    }

    onPanelClick(key);
    if (accordion) {
      return setActivePanels(prev => {
        if (prev.indexOf(key) >= 0) {
          return [];
        }
        return [key];
      });
    }

    return setActivePanels(prev => {
      if (prev.indexOf(key) >= 0) {
        return prev.filter(_key => _key !== key)
      }
      return [...prev, key];
    });
  }, [accordion, isControlled]);

  return (
    <div className={cn('rc-collapse', className)}>
      {React.Children.map(children, elm => {
        return React.cloneElement(elm, {
          active: activePanelsAsObject[elm.key],
          onClick: () => _onPanelClick(elm.key),
          ...elm.props
        });
      })}
    </div>
  );
};

Collapse.Item = Item;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  defaultActivePanels: PropTypes.array,
  activePanels: PropTypes.array,
  children: PropTypes.any,
  onActivePanelsChange: PropTypes.func,
  onPanelClick: PropTypes.func,
  accordion: PropTypes.bool,
};
Collapse.defaultProps = {
  defaultActivePanels: [],
  onActivePanelsChange: f => f,
  onPanelClick: f => f,
};

export default Collapse;
