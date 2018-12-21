/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/switch-demo/basic.js`,
  size: `${repo}/blob/master/app/modules/demo/switch-demo/size.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox title="Size" className="mb-5" link={links.size}>
          <div className="flex items-end">
            <SizeDemo />
          </div>
        </ExampleBox>
        <ExampleBox
          title="Switch"
          className="mb-5"
          code={`
export const sizes = Object.freeze({
  small: 'rc-switch--small',
  large: 'rc-switch--large',
});

...code

Switch.displayName = 'Switch';
Switch.propTypes = {
  switchRef: PropTypes.any,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  onChange: f => f,
};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
