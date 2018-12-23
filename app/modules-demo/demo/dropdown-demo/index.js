/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';

const links = {
  basic: 'app/modules-demo/demo/dropdown-demo/basic.js',
  hoc: 'app/modules-demo/demo/dropdown-demo/hoc.js',
};

export default class Demo extends React.Component {
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
      </Grid>
    );
  }
}

