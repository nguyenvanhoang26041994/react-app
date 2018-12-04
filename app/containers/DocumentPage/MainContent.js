import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AlertDemo from './demos/AlertDemo';
import AvatarDemo from './demos/AvatarDemo';
import ButtonDemo from './demos/ButtonDemo';
import CheckboxDemo from './demos/CheckboxDemo';
import DropdownDemo from './demos/DropdownDemo';
import IconDemo from './demos/IconDemo';
import MenuDemo from './demos/MenuDemo';
import ModalDemo from './demos/ModalDemo';
import PaginationDemo from './demos/PaginationDemo';
import PopconfirmDemo from './demos/PopconfirmDemo';
import SelectDemo from './demos/SelectDemo';
import StickerDemo from './demos/StickerDemo';
import TableDemo from './demos/TableDemo';
import TextboxDemo from './demos/TextboxDemo';
import TooltipDemo from './demos/TooltipDemo';
import NotFoundPage from '../NotFoundPage/Loadable';

export default class MainContent extends React.Component {
  state = {};

  render() {
    return (
      <div className="p-5">
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
      </div>
    );
  }
}
