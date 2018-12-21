/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import NativeDemo from './native';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  native: `${repo}/blob/master/app/modules/demo/select-demo/native.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox flex="auto" title="Select native" className="mb-5" link={links.native}>
          <NativeDemo />
        </ExampleBox>
        <ExampleBox
          title="Select.Native"
          className="mb-5"
        />
      </Grid>
    );
  }
}

export default Demo;
