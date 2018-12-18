import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import AlertDemo from '../demo/AlertDemo';
import AvatarDemo from '../demo/AvatarDemo';
import ButtonDemo from '../demo/ButtonDemo';
import CheckboxDemo from '../demo/CheckboxDemo';
import DropdownDemo from '../demo/DropdownDemo';
import IconDemo from '../demo/IconDemo';
import MenuDemo from '../demo/MenuDemo';
import ModalDemo from '../demo/ModalDemo';
import PaginationDemo from '../demo/PaginationDemo';
import PopconfirmDemo from '../demo/PopconfirmDemo';
import SelectDemo from '../demo/SelectDemo';
import StickerDemo from '../demo/StickerDemo';
import TableDemo from '../demo/TableDemo';
import TextboxDemo from '../demo/TextboxDemo';
import TooltipDemo from '../demo/TooltipDemo';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

import { Grid } from '../../components/core';

export default class MainContent extends React.Component {
  state = {};

  render() {
    const { className } = this.props;

    return (
      <Grid col className={className}>
        <Switch>
          <Route exact path="/document/Alert" component={AlertDemo} />
          <Route exact path="/document/Avatar" component={AvatarDemo} />
          <Route exact path="/document/Button" component={ButtonDemo} />
          <Route exact path="/document/Checkbox" component={CheckboxDemo} />
          <Route exact path="/document/Radio" component={CheckboxDemo} />
          <Route exact path="/document/Switch" component={CheckboxDemo} />
          <Route exact path="/document/Dropdown" component={DropdownDemo} />
          <Route exact path="/document/Icon" component={IconDemo} />
          <Route exact path="/document/Modal" component={ModalDemo} />
          <Route exact path="/document/Pagination" component={PaginationDemo} />
          <Route exact path="/document/Popconfirm" component={PopconfirmDemo} />
          <Route exact path="/document/Select" component={SelectDemo} />
          <Route exact path="/document/Sticker" component={StickerDemo} />
          <Route exact path="/document/Table" component={TableDemo} />
          <Route exact path="/document/Textbox" component={TextboxDemo} />
          <Route exact path="/document/Input" component={TextboxDemo} />
          <Route exact path="/document/Textarea" component={TextboxDemo} />
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
