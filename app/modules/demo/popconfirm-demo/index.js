/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import HOCDemo from './hoc';
import CustomizeButtonDemo from './customize-button';
import OnEventDemo from './on-event';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/popconfirm-demo/basic.js`,
  hoc: `${repo}/blob/master/app/modules/demo/popconfirm-demo/hoc.js`,
  'customize-button': `${repo}/blob/master/app/modules/demo/popconfirm-demo/customize-button.js`,
  'on-event': `${repo}/blob/master/app/modules/demo/popconfirm-demo/on-event.js`,
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
          code={`
const ButtonEnhance = Popconfirm.withPopconfirm(Button);
<ButtonEnhance popconfirmProps={ title: ..., placement: ... } />
        `}>
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
        <ExampleBox
          title="Tooltip"
          className="mb-5"
          code={`
const placements = Object.freeze({
  top: 'rc-popconfirm--top',
  bottom: 'rc-popconfirm--bottom',
  left: 'rc-popconfirm--left',
  right: 'rc-popconfirm--right',
  'top-left': 'rc-popconfirm--top-left',
  'left-top': 'rc-popconfirm--left-top',
  'top-right': 'rc-popconfirm--top-right',
  'right-top': 'rc-popconfirm--right-top',
  'bottom-left': 'rc-popconfirm--bottom-left',
  'left-bottom': 'rc-popconfirm--left-bottom',
  'bottom-right': 'rc-popconfirm--bottom-right',
  'right-bottom': 'rc-popconfirm--right-bottom',
});

Popconfirm.displayName = 'Popconfirm';
Popconfirm.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
  cancelText: PropTypes.node,
  okText: PropTypes.node,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
};
Popconfirm.defaultProps = {
  placement: 'top',
  cancelText: 'Cancel',
  okText: 'OK',
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
