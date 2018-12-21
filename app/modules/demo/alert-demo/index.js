/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import DescriptionDemo from './description';
import AnywhereDemo from './any-where';
import DurationDemo from './duration';
import CloseDemo from './close';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/alert-demo/basic.js`,
  'any-where': `${repo}/blob/master/app/modules/demo/alert-demo/any-where.js`,
  description: `${repo}/blob/master/app/modules/demo/alert-demo/description.js`,
  duration: `${repo}/blob/master/app/modules/demo/alert-demo/duration.js`,
  close: `${repo}/blob/master/app/modules/demo/alert-demo/close.js`,
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
        <ExampleBox
          title="Alert"
          className="mb-5"
          code={`
export const types = Object.freeze({
  success: 'rc-alert--success',
  info: 'rc-alert--info',
  warning: 'rc-alert--warning',
  error: 'rc-alert--error',
});

Alert.displayName = 'Alert';
Alert.propTypes = {
  duration: PropTypes.oneOfType([PropTypes.number]),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
  message: PropTypes.node.isRequired,
  description: PropTypes.node,
  children: PropTypes.node,
};
Alert.defaultProps = {
  type: 'info',
  duration: 0,
  closable: true,
  onClose: f => f,
};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
