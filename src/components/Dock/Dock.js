import React, { useRef, useState, useEffect, useCallback } from 'react';
import cn from 'classnames';

import Portal from '../Portal';
import Search from './Search';

require('./Dock.scss');

const Dock = ({ children }) => {
  return (
    <Portal>
      <div className="rc-dock">
        <Search />
      </div>
    </Portal>
  );
};

Dock.defaultProps = {
};

export default Dock;
