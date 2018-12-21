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

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/modal-demo/basic.js`,
  controlled: `${repo}/blob/master/app/modules/demo/modal-demo/controlled.js`,
  'any-where': `${repo}/blob/master/app/modules/demo/modal-demo/any-where.js`,
  'on-ok': `${repo}/blob/master/app/modules/demo/modal-demo/on-ok.js`,
  'on-cancel': `${repo}/blob/master/app/modules/demo/modal-demo/on-cancel.js`,
  'customize-button': `${repo}/blob/master/app/modules/demo/modal-demo/customize-button.js`,
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
          link={links['customize-button']}>
          <ControlledDemo />
        </ExampleBox>
        <ExampleBox
          title="Customize Button"
          className="mb-5"
          link={links.basic}>
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
          title="Modal"
          className="mb-5"
          code={`
Modal.displayName = 'Modal';
Modal.propTypes = {
  defaultOpen: PropTypes.bool,
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  hideCancel: PropTypes.bool,
  hideOK: PropTypes.bool,
  onClose: PropTypes.func,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  propsCancel: PropTypes.object,
  propsOK: PropTypes.object,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  renderJSNode: PropTypes.any,
};
Modal.defaultProps = {
  defaultOpen: true,
  cancelText: 'Cancel',
  okText: 'OK',
  propsCancel: {},
  propsOK: {},
  onClose: f => f,
  onOK: () => true,
  onCancel: () => true,
};   
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
