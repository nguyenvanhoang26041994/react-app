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
const UISystem = loadable(() => import('../UISystem'));

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
              <Route exact path="/">
                {/* <UISystem /> */}
              </Route>
              <Route path="/document/checkbox">
                <CheckboxDocument />
              </Route>
              <Route path="/document/switch">
                <SwitchDocument />
              </Route>
              <Route path="/document/radio">
                <RadioDocument />
              </Route>
              <Route path="/document/icon">
                <IconDocument />
              </Route>
              <Route path="/document/button">
                <ButtonDocument />
              </Route>
              <Route path="/document/tooltip">
                <TooltipDocument />
              </Route>
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
