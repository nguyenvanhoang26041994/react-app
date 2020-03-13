import React from 'react';
import Menubar from './Menubar';
import ScrollUp from '../components/ScrollUp';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Menubar />
      <ScrollUp />
      {children}
    </div>
  )
};

export default Layout;
