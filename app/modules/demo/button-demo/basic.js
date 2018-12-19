import React from 'react';
import { Button, Icon } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Button>
      <Icon icon="atom" />
    </Button>
    <Button className="ml-1">
      <Icon icon="atom" />
      Basic
    </Button>
    <Button className="ml-1">
      Basic
      <Icon icon="atom" />
    </Button>
    <Button className="ml-1">Basic</Button>
    <Button color="primary" className="ml-1">
      Primary
    </Button>
    <Button color="success" className="ml-1">
      Success
    </Button>
    <Button color="error" className="ml-1">
      Error
    </Button>
    <Button color="warning" className="ml-1">
      Warning
    </Button>
    <Button disabled className="ml-1">
      Disabled
    </Button>
  </React.Fragment>
);
