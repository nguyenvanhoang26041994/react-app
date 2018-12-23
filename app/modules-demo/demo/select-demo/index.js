/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import NativeDemo from './native';
import NiceDemo from './nice';
import SizeDemo from './size';
import PlacementDemo from './placement';

const links = {
  native: 'app/modules-demo/demo/select-demo/native.js',
  nice: 'app/modules-demo/demo/select-demo/nice.js',
  size: 'app/modules-demo/demo/select-demo/size.js',
  placement: 'app/modules-demo/demo/select-demo/placement.js',
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
        <ExampleBox flex="auto" title="Size" className="mb-5" link={links.nice}>
          <SizeDemo />
        </ExampleBox>
        <ExampleBox flex="auto" title="Placement" className="mb-5" link={links.placement}>
          <PlacementDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
