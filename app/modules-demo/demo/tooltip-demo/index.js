/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import HOCDemo from './hoc';

const links = {
  basic: 'app/modules-demo/demo/tooltip-demo/basic.js',
  hoc: 'app/modules-demo/demo/tooltip-demo/hoc.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col flex="auto">
        <ExampleBox
          title="Basic used"
          className="mb-5"
          link={links.basic}
        >
          <BasicDemo />
        </ExampleBox>
        <ExampleBox
          title="Flat with HOC"
          className="mb-5"
          link={links.hoc}
        >
          <HOCDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
