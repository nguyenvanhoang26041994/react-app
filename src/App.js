import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';

const HomePage = loadable(() => import('./pages/HomePage'));

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;