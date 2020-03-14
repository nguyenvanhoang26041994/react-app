import React from 'react';
import Menubar from './Menubar';
import ScrollUp from '../components/ScrollUp';

require('./Layout.scss');

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Menubar />
      <ScrollUp />
      <main className="pt-10">
        {children}
      </main>
    </div>
  )
};

export default Layout;
