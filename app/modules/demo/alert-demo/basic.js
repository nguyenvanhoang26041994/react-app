import React from 'react';
import { Alert } from '../../../components/core';

export default () => (
  <React.Fragment>
    <div className="flex flex-row flex-wrap">
      <Alert className="m-1" message="Alert message" type="info" />
      <Alert className="m-1" message="Alert message" type="success" />
      <Alert className="m-1" message="Alert message" type="warning" />
      <Alert className="m-1" message="Alert message" type="error" />
    </div>
  </React.Fragment>
);
