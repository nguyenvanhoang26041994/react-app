import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from './utils/loadable';

import Layout from './layout/Layout';

require('./scss/utils.scss');

const HomePage = loadable(() => import('./pages/HomePage'));
const FormDocumentPage = loadable(() => import('./pages/FormDocumentPage'));
const CommonDocumentPage = loadable(() => import('./pages/CommonDocumentPage'));
const DisplayDocumentPage = loadable(() => import('./pages/DisplayDocumentPage'));
const OverlayDocumentPage = loadable(() => import('./pages/OverlayDocumentPage'));
const SystemDesign = loadable(() => import('./pages/SystemDesign'));
const MusicComponentPage = loadable(() => import('./pages/MusicComponentPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/lap-music" component={MusicComponentPage} />
          <Route exact path="/ui-system" component={SystemDesign} />
          <Route exact path="/document/form" component={FormDocumentPage} />
          <Route exact path="/document/common" component={CommonDocumentPage} />
          <Route exact path="/document/display" component={DisplayDocumentPage} />
          <Route exact path="/document/overlay" component={OverlayDocumentPage} />
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