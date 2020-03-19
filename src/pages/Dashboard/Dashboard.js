import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Avatar, Button } from '../../components/core';

require('./Dashboard.scss');

const LoginUserSection = () => {
  return (
    <div id="mdl-login-user-section" className="flex flex-col items-center" style={{ padding: '1em 0' }}>
      <Avatar name="Hoang Nguyen" style={{ fontSize: '2.5em' }} className="mb-2" />
      <h2 className="text-lg mb-5">Hoàng Nguyễn</h2>
      <div className="flex items-center">
        <Button rounded className="mr-2">Update your profile</Button>
        <Button circle icon="bell" className="mr-2" />
        <Button circle icon="power-off" />
      </div>
    </div>
  );
};

const TopNavigation = () => {
  return (
    <div id="top-navigation" className="neumorphism flex items-center px-5" style={{ marginBottom: '0.25em', height: '5em', borderTopLeftRadius: '3em' }}>
      <Button icon="home" circle className="mr-2" style={{ fontSize: '1.5em' }} transparent />
    </div>
  );
};

const MainWorkingSpace = () => {
  return (
    <div id="mdl-working-space" className="neumorphism" style={{ flexGrow: '1', height: '80vh', borderBottomLeftRadius: '3em' }}>

    </div>
  );
};

const MobileMain = () => {
  return (
    <div id="mobile-main" className="neumorphism flex flex-col" style={{ width: '27em', height: 'calc(100vh - 2em)', borderTopRightRadius: '3em', borderBottomRightRadius: '3em' }}>
      <LoginUserSection />
      <div className="flex-1"></div>
    </div>
  );
}

const Dashboard = ({}) => {
  return (
    <div className="mdl-dashboard flex" style={{ padding: '1em 1em'}}>
      <div className="flex-1 flex flex-col" style={{ marginRight: '0.25em' }}>
        <TopNavigation />
        <MainWorkingSpace />
      </div>
      <MobileMain />
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
