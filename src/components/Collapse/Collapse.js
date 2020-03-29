import React, { useMemo, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

require('./Collapse.scss');

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, activePanels, children, accordion, setActivePanels, ...otherProps }) => {
  const activePanelsAsObject = useMemo(() => mapToObject(activePanels), [activePanels]);

  const onToggleActivePanels = useCallback((key) => {
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
  }, [accordion]);

  return (
    <div className={cn('rc-collapse', className)} {...otherProps}>
      {React.Children.map(children, elm => {
        return React.cloneElement(elm, {
          active: activePanelsAsObject[elm.key],
          toggleActive: () => onToggleActivePanels(elm.key)
        })
      })}
    </div>
  );
};

Collapse.Item = Item;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  activePanels: PropTypes.array,
  children: PropTypes.any,
  setActivePanels: PropTypes.func.isRequired,
  accordion: PropTypes.bool,
};
Collapse.defaultProps = {
  activePanels: [],
};

export default Collapse;
