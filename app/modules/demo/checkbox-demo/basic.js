import React from 'react';
import { Checkbox } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Checkbox />
    <Checkbox defaultChecked className="ml-1" />
    <Checkbox
      checked
      className="ml-1"
      onChange={e => console.log(e.target.checked)}
    />
  </React.Fragment>
);
