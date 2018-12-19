import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import GhostDemo from './ghost';
import GroupDemo from './group';
import LinkDemo from './link';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto" justify="space-between">
        <ExampleBox title="Basic used" className="mb-5">
          <BasicDemo />
        </ExampleBox>
        <ExampleBox title="Size" className="mb-5">
          <SizeDemo />
        </ExampleBox>
        <ExampleBox title="Ghost mode" className="mb-5">
          <GhostDemo />
        </ExampleBox>
        <ExampleBox title="Group" className="mb-5">
          <GroupDemo />
        </ExampleBox>
        <ExampleBox title="Link Button" className="mb-5">
          <LinkDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
