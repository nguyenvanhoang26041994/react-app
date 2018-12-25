/* eslint-disable no-console, no-alert */
import React from 'react';
import { Tabs, Icon } from '../../../components/core';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Tabs className="m-2" defaultActiveTab="Tab1">
        <Tabs.Tab tab="Tab1" title="Tab1">
          Tab1
        </Tabs.Tab>
        <Tabs.Tab tab="Tab2" title="Tab2">
          Tab2
        </Tabs.Tab>
        <Tabs.Tab tab="Tab3" title="Tab3">
          Tab3
        </Tabs.Tab>
        <Tabs.Tab tab="Tab4" title="Tab4">
          Tab4
        </Tabs.Tab>
        <Tabs.Tab tab="iconta24b" title={<Icon icon="atom" />}>
          Icon Tab
        </Tabs.Tab>
        <Tabs.Tab
          tab="icontab"
          title={
            <React.Fragment>
              <Icon icon="atom" className="mr-2" /> UnRefresh
            </React.Fragment>
          }
        >
          This content run componentDidUpdate when you re-click this tab, If you
          do not want re-fetching data(fetching data in componentDidMout ). That
          is good choise
        </Tabs.Tab>
        <Tabs.Tab
          refresh
          tab="refresh"
          title={
            <React.Fragment>
              <Icon icon="atom" className="mr-2" /> Refresh
            </React.Fragment>
          }
        >
          This content run componentDidMout when you re-click this tab, If you
          want re-fetching data(fetching data in componentDidMout ). That is
          good choise
        </Tabs.Tab>
        <Tabs.Tab tab="icontab2" disabled title={<Icon icon="atom" />}>
          Disabled Tab
        </Tabs.Tab>
      </Tabs>
    );
  }
}

export default Demo;
