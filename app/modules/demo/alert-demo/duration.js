import React from 'react';
import { Alert } from '../../../components/core';

export default () => (
  <React.Fragment>
    <div className="flex flex-row">
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="info"
        duration="10000"
      />
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="success"
        duration="30000"
      />
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="warning"
        duration="60000"
      />
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="error"
        duration="100000"
      />
    </div>
  </React.Fragment>
);
