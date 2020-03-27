import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import loadable from '../../utils/loadable';

const CheckboxDocument = loadable(() => import('../documents/CheckboxDocument'));
const RadioDocument = loadable(() => import('../documents/RadioDocument'));
const SwitchDocument = loadable(() => import('../documents/SwitchDocument'));
const IconDocument = loadable(() => import('../documents/IconDocument'));
const ButtonDocument = loadable(() => import('../documents/ButtonDocument'));
const TooltipDocument = loadable(() => import('../documents/TooltipDocument'));
const DrawerDocument = loadable(() => import('../documents/DrawerDocument'));
const ModalDocument = loadable(() => import('../documents/ModalDocument'));
const ConfirmDocument = loadable(() => import('../documents/ConfirmDocument'));

require('./Dashboard.scss');

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <div id="main-admin" className="flex pr-2">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <div className="flex">
          <div className="flex-1">
            <Switch>
              <Route path="/document/checkbox" component={CheckboxDocument} />
              <Route path="/document/switch" component={SwitchDocument} />
              <Route path="/document/radio" component={RadioDocument} />
              <Route path="/document/icon" component={IconDocument} />
              <Route path="/document/button" component={ButtonDocument} />
              <Route path="/document/tooltip" component={TooltipDocument} />
              <Route path="/document/drawer" component={DrawerDocument} />
              <Route path="/document/modal" component={ModalDocument} />
              <Route path="/document/confirm" component={ConfirmDocument} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
