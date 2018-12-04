/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { Button, Tabs } from '../../components/core';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = { activeTab: 'tab-1' };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Button>Button</Button>
          <Button color="primary">Primary Button</Button>
          <Button disabled color="primary">
            Primary Button
          </Button>
          <Button size="large" color="primary">
            Large Primary
          </Button>
          <Button size="small" color="primary">
            Small Primary
          </Button>
          <Button.Group size="small" color="primary">
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Button.Group>
        </Wrapper>
        <Wrapper>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(event, tab) => this.setState({ activeTab: tab })}
          >
            <Tabs.Tab tab="tab-1" title="Home">
              Tab1
            </Tabs.Tab>
            <Tabs.Tab tab="tab-2" title="About">
              Tab2
            </Tabs.Tab>
            <Tabs.Tab tab="tab-3" title="Contact">
              Tab3
            </Tabs.Tab>
          </Tabs>
        </Wrapper>
      </React.Fragment>
    );
  }
}
