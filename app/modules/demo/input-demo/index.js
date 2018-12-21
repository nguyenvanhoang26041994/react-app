/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import NativeDemo from './native';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  native: `${repo}/blob/master/app/modules/demo/input-demo/native.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox flex="auto" title="Textarea native" className="mb-5" link={links.native}>
          <NativeDemo />
        </ExampleBox>
        <ExampleBox
          title="Textarea.Native"
          className="mb-5"
          code={`
Textarea.displayName = 'Textarea.Native';
Textarea.propTypes = {
  className: PropTypes.string,
  textareaRef: PropTypes.any,
};
Textarea.defaultProps = {};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
