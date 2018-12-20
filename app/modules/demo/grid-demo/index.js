import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/grid-demo/basic.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto" justify="space-between">
        <ExampleBox col title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
