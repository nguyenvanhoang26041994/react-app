/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import NativeDemo from './native';
import AdvanceDemo from './advance';

const links = {
  native: 'app/modules-demo/demo/input-demo/native.js',
  advance: 'app/modules-demo/demo/input-demo/advance.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox flex="auto" title="Input native" className="mb-5" link={links.native}>
          <NativeDemo />
        </ExampleBox>
        <ExampleBox flex="auto" title="Input" className="mb-5" link={links.advance}>
          <AdvanceDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
