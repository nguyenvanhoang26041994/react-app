import React from 'react';
import Menubar from './Menubar';
import ScrollUp from '../components/ScrollUp';
import DarkModeToggle from '../components/DarkModeToggle';
require('./Layout.scss');

const Layout = ({ children }) => {
  return (
    <div id="layout">
      {/* <Menubar /> */}
      <DarkModeToggle />
      {/* <ScrollUp /> */}
      <main className="">
        {children}
      </main>
    </div>
  )
};

export default Layout;
