import React from 'react';
import { Alert, Button } from '../../components/core';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="flex mb-2">
          <Button color="primary" onClick={() => Alert.clean()}>
            Clean All Alert
          </Button>
        </div>
        <div className="flex mb-2">
          <Button
            color="success"
            onClick={() =>
              Alert.success({
                style: { width: '400px' },
                placement: 'top',
                message: 'This is a success top message',
                description: 'This is a description',
              })
            }
          >
            top Alert.success width 400px
          </Button>
          <Button
            className="ml-1"
            color="primary"
            onClick={() =>
              Alert.info({
                placement: 'center',
                message: 'This is a center info message',
                description: 'This is a description',
              })
            }
          >
            center Alert.info
          </Button>
          <Button
            className="ml-1"
            color="primary"
            onClick={() =>
              Alert.info({
                placement: 'bottom',
                message: 'This is a bottom info message',
                description: 'This is a description',
              })
            }
          >
            bottom Alert.info
          </Button>
          <Button
            className="ml-1"
            color="warning"
            onClick={() =>
              Alert.warning({
                placement: 'left',
                message: 'This is a left warning message',
                // description: 'This is a description',
              })
            }
          >
            left Alert.warning
          </Button>
          <Button
            className="ml-1"
            color="error"
            onClick={() =>
              Alert.error({
                placement: 'right',
                message: 'This is a right error message',
                description: 'This is a description',
              })
            }
          >
            right Alert.error
          </Button>
        </div>
        <div className="flex mb-2">
          <Button
            color="success"
            onClick={() =>
              Alert.success({
                placement: 'top-left',
                message: 'This is a top-left || left-top success top message',
                description: 'This is a description',
              })
            }
          >
            top-left || left-top
          </Button>
          <Button
            className="ml-1"
            color="primary"
            onClick={() =>
              Alert.info({
                placement: 'top-right',
                message: 'This is a top-right || right-top info message',
                description: 'This is a description',
              })
            }
          >
            top-right || right-top
          </Button>
          <Button
            className="ml-1"
            color="warning"
            onClick={() =>
              Alert.warning({
                placement: 'bottom-right',
                message:
                  'This is a bottom-right || right-bottom warning message',
                description: 'This is a description',
              })
            }
          >
            bottom-right || right-bottom
          </Button>
          <Button
            className="ml-1"
            color="error"
            onClick={() =>
              Alert.error({
                placement: 'bottom-left',
                message: 'This is a bottom-left || left-bottom error message',
                description: 'This is a description',
              })
            }
          >
            bottom-left || left-bottom
          </Button>
        </div>
        <Alert className="mt-5" message="This is a message" />
        <Alert className="mt-5" message="This is a message" type="info" />
        <Alert className="mt-5" message="This is a message" type="success" />
        <Alert className="mt-5" message="This is a message" type="warning" />
        <Alert className="mt-5" message="This is a message" type="error" />
        <Alert className="mt-5" message="This is a message" />
        <Alert className="mt-5" message="This is a message" type="info" />
        <Alert className="mt-5" message="This is a message" type="success" />
        <Alert className="mt-5" message="This is a message" type="warning" />
        <Alert className="mt-5" message="This is a message" type="error" />
        <Alert className="mt-5" message="This is a message" />
        <Alert className="mt-5" message="This is a message" type="info" />
        <Alert className="mt-5" message="This is a message" type="success" />
        <Alert className="mt-5" message="This is a message" type="warning" />
        <Alert className="mt-5" message="This is a message" type="error" />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="info"
          duration={0}
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="success"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="warning"
        />
        <Alert
          className="mt-5"
          message="This is a message"
          description="This is a description"
          type="error"
        />
      </div>
    );
  }
}

export default Demo;
