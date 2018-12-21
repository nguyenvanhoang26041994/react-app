/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import ShapeDemo from './shape';

const links = {
  basic: 'app/modules/demo/avatar-demo/basic.js',
  size: 'app/modules/demo/avatar-demo/size.js',
  shape: 'app/modules/demo/avatar-demo/shape.js',
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
          title="Size"
          className="mb-5"
          link={links.size}
        >
          <div className="flex items-end">
            <SizeDemo />
          </div>
        </ExampleBox>
        <ExampleBox
          title="Shape"
          className="mb-5"
          link={links.shape}
        >
          <ShapeDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
