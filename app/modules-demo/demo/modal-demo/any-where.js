import React from 'react';
import { Modal, Button } from '../../../components/core';

export default () => (
  <React.Fragment>
    <div className="flex flex-row">
      <Button
        color="primary"
        className="ml-1"
        onClick={() =>
          Modal.info({
            message: 'Message',
            description: 'Description',
          })
        }
      >
        info
      </Button>
      <Button
        color="warning"
        className="ml-1"
        onClick={() =>
          Modal.confirm({
            message: 'Message',
            description: 'Description',
          })
        }
      >
        confirm
      </Button>
      <Button
        color="success"
        className="ml-1"
        onClick={() =>
          Modal.success({
            message: 'Message',
            description: 'Description',
          })
        }
      >
        success
      </Button>
      <Button
        color="warning"
        className="ml-1"
        onClick={() =>
          Modal.warning({
            message: 'Message',
            description: 'Description',
          })
        }
      >
        warning
      </Button>
      <Button
        color="error"
        className="ml-1"
        onClick={() =>
          Modal.error({
            message: 'Message',
            description: 'Description',
          })
        }
      >
        error
      </Button>
      <Button
        color="error"
        className="ml-1"
        onClick={() =>
          Modal.delete({
            message: 'Message',
            description: 'Description',
          })
        }
      >
        delete
      </Button>
    </div>
  </React.Fragment>
);
