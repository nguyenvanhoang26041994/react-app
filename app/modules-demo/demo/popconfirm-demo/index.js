/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import HOCDemo from './hoc';
import CustomizeButtonDemo from './customize-button';
import OnEventDemo from './on-event';

const links = {
  basic: 'app/modules-demo/demo/popconfirm-demo/basic.js',
  hoc: 'app/modules-demo/demo/popconfirm-demo/hoc.js',
  'customize-button': 'app/modules-demo/demo/popconfirm-demo/customize-button.js',
  'on-event': 'app/modules-demo/demo/popconfirm-demo/on-event.js',
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
          title="Flat with HOC"
          className="mb-5"
          link={links.hoc}
        >
          <HOCDemo />
        </ExampleBox>
        <ExampleBox
          title="Customize Button"
          className="mb-5"
          link={links['customize-button']}
        >
          <CustomizeButtonDemo />
        </ExampleBox>
        <ExampleBox
          title="onOK and onCancel"
          className="mb-5"
          link={links['on-event']}
        >
          <OnEventDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
