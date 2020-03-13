import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';

import Layout from './layout/Layout';

const HomePage = loadable(() => import('./pages/HomePage'));
const FormDocumentPage = loadable(() => import('./pages/FormDocumentPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/document/form" component={FormDocumentPage} />
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