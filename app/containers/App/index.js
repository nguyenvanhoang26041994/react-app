/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import MainLayout from '../../modules/MainLayout/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/document/" />} />
        <Route exact path="/document/*" component={MainLayout} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
