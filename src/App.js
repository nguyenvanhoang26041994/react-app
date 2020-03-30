import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';

require('./scss/begin.scss');

const Dashboard = loadable(() => import('./pages/Dashboard'));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/document/*" component={Dashboard} />
        <Route path="" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;