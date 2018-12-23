/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import ControlledDemo from './controlled';
import AnywhereDemo from './any-where';
import OnOKDemo from './on-ok';
import OnCancelDemo from './on-cancel';
import CustomizeButtonDemo from './customize-button';
import PureModalDemo from './pure-modal';

const links = {
  basic: 'app/modules-demo/demo/modal-demo/basic.js',
  controlled: 'app/modules-demo/demo/modal-demo/controlled.js',
  'any-where': 'app/modules-demo/demo/modal-demo/any-where.js',
  'on-ok': 'app/modules-demo/demo/modal-demo/on-ok.js',
  'on-cancel': 'app/modules-demo/demo/modal-demo/on-cancel.js',
  'customize-button': 'app/modules-demo/demo/modal-demo/customize-button.js',
  'pure-modal': 'app/modules-demo/demo/modal-demo/pure-modal.js',
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
          title="Controlled Modal"
          className="mb-5"
          link={links.controlled}>
          <ControlledDemo />
        </ExampleBox>
        <ExampleBox
          title="Customize Button"
          className="mb-5"
          link={links['customize-button']}>
          <CustomizeButtonDemo />
        </ExampleBox>
        <ExampleBox
          title="onOK"
          className="mb-5"
          link={links['on-ok']}>
          <OnOKDemo />
        </ExampleBox>
        <ExampleBox
          title="onCancel"
          className="mb-5"
          link={links['on-cancel']}>
          <OnCancelDemo />
        </ExampleBox>
        <ExampleBox
          title="Anywhere on you app"
          className="mb-5"
          link={links.basic}>
          <AnywhereDemo />
        </ExampleBox>
        <ExampleBox
          title="Pure Modal"
          className="mb-5"
          link={links['pure-modal']}>
          <PureModalDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
