/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import GhostDemo from './ghost';
import GroupDemo from './group';
import LinkDemo from './link';

const links = {
  basic: '/app/modules-demo/demo/button-demo/basic.js',
  size: '/app/modules-demo/demo/button-demo/size.js',
  ghost: '/app/modules-demo/demo/button-demo/ghost.js',
  group: '/app/modules-demo/demo/button-demo/group.js',
  link: '/app/modules-demo/demo/button-demo/link.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox title="Size" className="mb-5" link={links.size}>
          <div className="flex items-end">
            <SizeDemo />
          </div>
        </ExampleBox>
        <ExampleBox title="Ghost mode" className="mb-5" link={links.ghost}>
          <GhostDemo />
        </ExampleBox>
        <ExampleBox
          title="Group"
          className="mb-5"
          link={links.group}
        >
          <GroupDemo />
        </ExampleBox>
        <ExampleBox
          title="Link Button"
          className="mb-5"
        >
          <LinkDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
