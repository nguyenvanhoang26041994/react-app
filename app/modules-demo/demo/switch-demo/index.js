/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';

const links = {
  basic: 'app/modules-demo/demo/switch-demo/basic.js',
  size: 'app/modules-demo/demo/switch-demo/size.js',
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
      </Grid>
    );
  }
}

export default Demo;
