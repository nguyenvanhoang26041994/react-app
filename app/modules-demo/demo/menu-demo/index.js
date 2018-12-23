/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import DefaultShowDemo from './default-show';
import ControlledDemo from './controlled';

const links = {
  'default-show': 'app/modules-demo/demo/menu-demo/default-show.js',
  basic: 'app/modules-demo/demo/menu-demo/basic.js',
  controlled: 'app/modules-demo/demo/menu-demo/controlled.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox flex="auto" title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox flex="auto" title="defaultShow(props op SubMenu)" className="mb-5" link={links['default-show']}>
          <DefaultShowDemo />
        </ExampleBox>
        <ExampleBox flex="auto" title="Controlled component" className="mb-5" link={links.controlled}>
          <ControlledDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
