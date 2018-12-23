/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import NativeDemo from './native';

const links = {
  native: 'app/modules/demo/select-demo/native.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox flex="auto" title="Select native" className="mb-5" link={links.native}>
          <NativeDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
