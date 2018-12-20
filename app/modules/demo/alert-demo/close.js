import React from 'react';
import { Alert } from '../../../components/core';

export default () => (
  <React.Fragment>
    <div className="flex flex-row flex-wrap">
      <Alert
        closable={false}
        className="m-5"
        message="Alert message"
        type="info"
      />
      <Alert
        closable={false}
        className="m-5"
        message="Alert message"
        type="success"
      />
      <Alert
        closable={false}
        className="m-5"
        message="Alert message"
        type="warning"
      />
      <Alert
        closable={false}
        className="m-5"
        message="Alert message"
        type="error"
      />
    </div>
  </React.Fragment>
);
