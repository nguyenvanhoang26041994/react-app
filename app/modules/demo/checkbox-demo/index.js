/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/checkbox-demo/basic.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox
          title="Checkbox"
          className="mb-5"
          code={`
Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  checkboxRef: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Checkbox.defaultProps = {
  onChange: f => f,
};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
