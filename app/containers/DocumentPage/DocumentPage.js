import React from 'react';
import { omit } from 'lodash/fp';
import { withRouter } from 'react-router-dom';
// import styled from 'styled-components';

import { Grid, Menu } from '../../components/core';
import MainContent from './MainContent';
import appMenus from './menus';

class DocumentPage extends React.Component {
  state = {};

  renderMenu = menus =>
    menus.map(menu => {
      if (menu.isSubMenu) {
        const { children, ...otherProps } = omit(['isSubMenu', 'isGroupItem'])(
          menu,
        );
        return (
          <Menu.SubMenu {...otherProps}>
            {this.renderMenu(children)}
          </Menu.SubMenu>
        );
      }

      if (menu.isGroupItem) {
        const { children, ...otherProps } = omit(['isSubMenu', 'isGroupItem'])(
          menu,
        );
        return (
          <Menu.GroupItem {...otherProps}>
            {this.renderMenu(children)}
          </Menu.GroupItem>
        );
      }

      return <Menu.Item {...menu} />;
    });

  handleChangeLocation = activeKey =>
    this.props.history.push(`/document/${activeKey}`);

  render() {
    return (
      <Grid col span="full">
        <Grid row span="full" className="styled-header" />
        <Grid row span="full" className="styled-main">
          <Grid col span="2/12">
            <Menu onClick={this.handleChangeLocation}>
              {this.renderMenu(appMenus)}
            </Menu>
          </Grid>
          <Grid col span="10/12">
            <MainContent />
          </Grid>
        </Grid>
        <Grid row span="full" className="styled-footer" />
      </Grid>
    );
  }
}

export default withRouter(DocumentPage);
