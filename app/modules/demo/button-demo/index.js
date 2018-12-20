import React from 'react';

import { Grid, Table } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import GhostDemo from './ghost';
import GroupDemo from './group';
import LinkDemo from './link';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/button-demo/basic.js`,
  size: `${repo}/blob/master/app/modules/demo/button-demo/size.js`,
  ghost: `${repo}/blob/master/app/modules/demo/button-demo/ghost.js`,
  group: `${repo}/blob/master/app/modules/demo/button-demo/group.js`,
  link: `${repo}/blob/master/app/modules/demo/button-demo/link.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto" justify="space-between">
        <ExampleBox title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox title="Size" className="mb-5" link={links.size}>
          <SizeDemo />
        </ExampleBox>
        <ExampleBox title="Ghost mode" className="mb-5" link={links.ghost}>
          <GhostDemo />
        </ExampleBox>
        <ExampleBox title="Group" className="mb-5" link={links.group}>
          <GroupDemo />
        </ExampleBox>
        <ExampleBox title="Link Button" className="mb-5" link={links.link}>
          <LinkDemo />
        </ExampleBox>
        <Grid>
          <Table />
        </Grid>
      </Grid>
    );
  }
}

export default Demo;
