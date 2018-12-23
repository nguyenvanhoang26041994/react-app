import React from 'react';
import { Alert, Button } from '../../../components/core';

export default () => (
  <React.Fragment>
    <div className="flex flex-row">
      <Button onClick={() => Alert.clean()}>Alert.clean()</Button>
      <Button
        color="primary"
        className="ml-1"
        onClick={() =>
          Alert.info({
            message: 'Alert message!',
            placement: 'top',
          })
        }
      >
        top
      </Button>
      <Button
        color="error"
        className="ml-1"
        onClick={() =>
          Alert.error({
            message: 'Alert message!',
            placement: 'top-right',
            type: 'error',
          })
        }
      >
        top-right
      </Button>
      <Button
        color="warning"
        className="ml-1"
        onClick={() =>
          Alert.warning({
            message: 'Alert message!',
            placement: 'right',
            type: 'warning',
          })
        }
      >
        right
      </Button>
      <Button
        color="success"
        className="ml-1"
        onClick={() =>
          Alert.success({
            message: 'Alert message!',
            placement: 'right-bottom',
            type: 'success',
          })
        }
      >
        right-bottom
      </Button>
      <Button
        className="ml-1"
        onClick={() =>
          Alert.info({
            message: 'Alert message!',
            placement: 'bottom',
          })
        }
      >
        bottom
      </Button>
      <Button
        className="ml-1"
        onClick={() =>
          Alert.info({
            message: 'Alert message!',
            placement: 'bottom-left',
          })
        }
      >
        bottom-left
      </Button>
      <Button
        className="ml-1"
        onClick={() =>
          Alert.info({
            message: 'Alert message!',
            placement: 'left',
          })
        }
      >
        left
      </Button>
      <Button
        className="ml-1"
        onClick={() =>
          Alert.info({
            message: 'Alert message!',
            placement: 'top-left',
          })
        }
      >
        top-left
      </Button>
      <Button
        className="ml-1"
        onClick={() =>
          Alert.info({
            message: 'Alert message!',
            placement: 'top-left',
            duration: 2000,
          })
        }
      >
        duration 2000ms
      </Button>
    </div>
  </React.Fragment>
);
