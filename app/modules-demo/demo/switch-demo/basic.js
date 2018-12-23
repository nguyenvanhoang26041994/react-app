import React from 'react';
import { Switch } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Switch />
    <Switch defaultChecked className="ml-2" />
    <Switch
      checked
      className="ml-2"
      onChange={e => console.log(e.target.checked)}
    />
  </React.Fragment>
);
