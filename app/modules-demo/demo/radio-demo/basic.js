import React from 'react';
import { Radio } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Radio />
    <Radio defaultChecked className="ml-1" />
    <Radio
      checked
      className="ml-1"
      onChange={e => console.log(e.target.checked)}
    />
  </React.Fragment>
);
