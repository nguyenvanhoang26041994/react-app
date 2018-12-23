/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import NativeDemo from './native';
import NiceDemo from './nice';

const links = {
  native: 'app/modules-demo/demo/select-demo/native.js',
  nice: 'app/modules-demo/demo/select-demo/nice.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox flex="auto" title="Select native" className="mb-5" link={links.native}>
          <NativeDemo />
        </ExampleBox>
        <ExampleBox flex="auto" title="Select beauty" className="mb-5" link={links.nice}>
          <NiceDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
