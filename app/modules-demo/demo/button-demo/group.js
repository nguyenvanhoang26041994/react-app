import React from 'react';
import { Button, Icon } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Button.Group>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Button.Group>
    <Button.Group color="primary" className="ml-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Button.Group>
    <Button.Group ghost color="primary" className="ml-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Button.Group>
    <Button.Group color="primary" className="ml-2">
      <Button>
        <Icon icon="atom" />
      </Button>
      <Button>
        <Icon icon="atom" />
      </Button>
      <Button>
        <Icon icon="atom" />
      </Button>
    </Button.Group>
  </React.Fragment>
);
