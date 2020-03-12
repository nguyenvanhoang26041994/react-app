import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Portal from '../Portal';
require('./Dock.scss');

const Dock = ({ children }) => {
  return (
    <Portal>
      <div  className="rc-dock" />
    </Portal>
  );
};

Dock.defaultProps = {
};

export default Dock;
