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
      />
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="success"
      />
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="warning"
      />
      <Alert
        className="m-1"
        message="Alert message"
        description="Alert description"
        type="error"
      />
    </div>
  </React.Fragment>
);
