/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import ControlledDemo from './controlled';
import AnywhereDemo from './any-where';

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
          link={links.basic}>
          <ControlledDemo />
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
