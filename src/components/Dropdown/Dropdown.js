import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Overlay from '../Overlay';

require('./Dropdown.scss');

const Dropdown = ({ children, className, ...otherProps }) => {
  const [visible, setVisible] = useState(false);
  const onVisibleChange = useCallback(_v => setVisible(_v), []);
  const onCloseOverlay = useCallback(() => setVisible(false));

  return (
    <Overlay
      visible={visible}
      onVisibleChange={onVisibleChange}
      className={cn('rc-dropdown', className )}
      canOutsideClickClose
      {...otherProps}
    >
      {children}
    </Overlay>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
Dropdown.defaultProps = {};

export default Dropdown;
