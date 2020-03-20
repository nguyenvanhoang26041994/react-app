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
        {/* <Button circle icon="bell" className="mr-2" /> */}
        <Button circle icon="power-off" />
      </div>
    </div>
  );
};

const TopNavigation = () => {
  return (
    <div
      style={{
        marginBottom: '0.25em',
        height: '5em',
      }}
    >
      <div
        id="top-navigation"
        className="neumorphism flex items-center px-5"
        style={{
          // position: 'fixed',
          width: 'inherit',
          height: 'inherit',
          borderTopLeftRadius: '3em',
        }}
      >
        <Button icon="home" circle className="mr-2" style={{ fontSize: '1.5em' }} transparent />
      </div>
    </div>
  );
};

const MainWorkingSpace = () => {
  return (
    <div id="mdl-working-space" className="flex flex-col" style={{ flexGrow: '1',  borderBottomLeftRadius: '3em' }}>
      <div className="mx-auto neumorphism mt-5" style={{ width: '35em', height: '35em', borderRadius: '1em' }}></div>
      <div className="mx-auto neumorphism mt-5" style={{ width: '35em', height: '35em', borderRadius: '1em' }}></div>
      <div className="mx-auto neumorphism mt-5" style={{ width: '35em', height: '35em', borderRadius: '1em' }}></div>
      <div className="mx-auto neumorphism mt-5" style={{ width: '35em', height: '35em', borderRadius: '1em' }}></div>
    </div>
  );
};

const MobileMain = () => {
  return (
    <div
      style={{
        width: '17em', height: 'calc(100vh - 2em)',
      }}
    >
      <div
        id="mobile-main"
        className="neumorphism flex flex-col"
        style={{
          width: 'inherit',
          height: 'inherit',
          position: 'fixed',
          borderTopRightRadius: '3em',
          borderBottomRightRadius: '3em',
        }}>
        <LoginUserSection />
        <div className="flex-1"></div>
      </div>
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
