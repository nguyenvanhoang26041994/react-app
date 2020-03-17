import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Panel from './Panel';

require('./Collapse.scss');

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, defaultKeys, children, ...otherProps }) => {
  const panelKeys = useMemo(() => mapToObject(defaultKeys), [defaultKeys]);

  return (
    <div className={cn('rc-collapse', className)} {...otherProps}>
      {React.Children.map(children, elm => React.cloneElement(elm, {
        defaultActive: panelKeys[elm.key],
        ...elm.props
      }))}
    </div>
  );
};

Collapse.Panel = Panel;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  defaultKeys: PropTypes.array,
};
Collapse.defaultProps = {
  defaultKeys: [],
};

export default Collapse;
