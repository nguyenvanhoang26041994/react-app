/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import DescriptionDemo from './description';
import AnywhereDemo from './any-where';
import DurationDemo from './duration';
import CloseDemo from './close';

const links = {
  basic: 'app/modules-demo/demo/alert-demo/basic.js',
  'any-where': 'app/modules-demo/demo/alert-demo/any-where.js',
  description: 'app/modules-demo/demo/alert-demo/description.js',
  duration: 'app/modules-demo/demo/alert-demo/duration.js',
  close: 'app/modules-demo/demo/alert-demo/close.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col flex="auto">
        <ExampleBox
          title="Basic used"
          className="mb-5"
          link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox
          title="With description"
          className="mb-5"
          link={links.description}>
          <DescriptionDemo />
        </ExampleBox>
        <ExampleBox
          title="Closable"
          className="mb-5"
          link={links.close}>
          <CloseDemo />
        </ExampleBox>
        <ExampleBox
          title="Duration"
          className="mb-5"
          link={links.duration}>
          <DurationDemo />
        </ExampleBox>
        <ExampleBox
          title="Alert call any where on you app"
          className="mb-5"
          link={links['any-where']}>
          <AnywhereDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
