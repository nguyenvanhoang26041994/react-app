import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';

import Layout from './layout/Layout';

require('./scss/begin.scss');

const HomePage = loadable(() => import('./pages/HomePage'));
const MusicComponentPage = loadable(() => import('./pages/MusicComponentPage'));
const Dashboard = loadable(() => import('./pages/Dashboard'));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/lap-music-components" component={MusicComponentPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/lap-2" component={MusicComponentPage} />
          <Route path="" component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;