import React from 'react';
import Menubar from './Menubar';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Menubar />
      {children}
    </div>
  )
};

export default Layout;
