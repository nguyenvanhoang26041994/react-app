import React from 'react';
import { Button, Icon } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Button.Link href="https://google.com">
      <Icon icon="atom" />
    </Button.Link>
    <Button.Link href="https://google.com" className="ml-1">
      <Icon icon="atom" />
      Basic
    </Button.Link>
    <Button.Link href="https://google.com" className="ml-1">
      Basic
      <Icon icon="atom" />
    </Button.Link>
    <Button.Link href="https://google.com" className="ml-1">
      Basic
    </Button.Link>
    <Button.Link href="https://google.com" color="primary" className="ml-1">
      Primary
    </Button.Link>
    <Button.Link href="https://google.com" color="success" className="ml-1">
      Success
    </Button.Link>
    <Button.Link href="https://google.com" color="error" className="ml-1">
      Error
    </Button.Link>
    <Button.Link href="https://google.com" color="warning" className="ml-1">
      Warning
    </Button.Link>
    <Button.Link href="https://google.com" disabled className="ml-1">
      Disabled
    </Button.Link>
    <Button.Group color="primary" className="ml-1">
      <Button.Link>1</Button.Link>
      <Button.Link>2</Button.Link>
      <Button.Link>3</Button.Link>
    </Button.Group>
    <Button.Group className="ml-1">
      <Button.Link>1</Button.Link>
      <Button.Link>2</Button.Link>
      <Button.Link>3</Button.Link>
    </Button.Group>
  </React.Fragment>
);
