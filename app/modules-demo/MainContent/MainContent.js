import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import ButtonDemo from '../demo/button-demo';
import IconDemo from '../demo/icon-demo';
import GridDemo from '../demo/grid-demo';
import AlertDemo from '../demo/alert-demo';
import AvatarDemo from '../demo/avatar-demo';
import CheckboxDemo from '../demo/checkbox-demo';
import SwitchDemo from '../demo/switch-demo';
import RadioDemo from '../demo/radio-demo';
import InputDemo from '../demo/input-demo';
import DropdownDemo from '../demo/dropdown-demo';
import MenuDemo from '../demo/menu-demo';
import ModalDemo from '../demo/modal-demo';
import PaginationDemo from '../demo/pagination-demo';
import PopconfirmDemo from '../demo/popconfirm-demo';
import SelectDemo from '../demo/select-demo';
import TableDemo from '../demo/table-demo';
import TooltipDemo from '../demo/tooltip-demo';
import TabsDemo from '../demo/tabs-demo';

import NotFoundPage from '../../containers/NotFoundPage/Loadable';

import { Grid } from '../../components/core';

export default class MainContent extends React.Component {
  state = {};

  render() {
    const { className } = this.props;

    return (
      <Grid col className={className}>
        <Switch>
          <Route exact path="/document/Grid" component={GridDemo} />
          <Route exact path="/document/Tabs" component={TabsDemo} />
          <Route exact path="/document/Alert" component={AlertDemo} />
          <Route exact path="/document/Avatar" component={AvatarDemo} />
          <Route exact path="/document/Button" component={ButtonDemo} />
          <Route exact path="/document/Checkbox" component={CheckboxDemo} />
          <Route exact path="/document/Radio" component={RadioDemo} />
          <Route exact path="/document/Switch" component={SwitchDemo} />
          <Route exact path="/document/Dropdown" component={DropdownDemo} />
          <Route exact path="/document/Icon" component={IconDemo} />
          <Route exact path="/document/Modal" component={ModalDemo} />
          <Route exact path="/document/Pagination" component={PaginationDemo} />
          <Route exact path="/document/Popconfirm" component={PopconfirmDemo} />
          <Route exact path="/document/Select" component={SelectDemo} />
          <Route exact path="/document/Table" component={TableDemo} />
          <Route exact path="/document/Input" component={InputDemo} />
          <Route exact path="/document/Tooltip" component={TooltipDemo} />
          <Route exact path="/document/Menu" component={MenuDemo} />
          <Route component={NotFoundPage} />
        </Switch>
      </Grid>
    );
  }
}

MainContent.propTypes = {
  className: PropTypes.string,
};
MainContent.defualtProps = {};
