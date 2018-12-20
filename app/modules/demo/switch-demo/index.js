/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';

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
      <Grid col wrap flex="auto">
        <ExampleBox col title="Basic used" className="mb-5" link={links.basic} code={`<Switch /> <Switch defaultChecked /> <Switch checked onChange={e => console.log(e.target.checked)} />`}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox
          col
          title="Switch"
          className="mb-5"
          code={`
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
