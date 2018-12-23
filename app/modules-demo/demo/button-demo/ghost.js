import React from 'react';
import { Button } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Button ghost>Basic</Button>
    <Button ghost color="primary" className="ml-1">
      Primary
    </Button>
    <Button ghost color="success" className="ml-1">
      Success
    </Button>
    <Button ghost color="error" className="ml-1">
      Error
    </Button>
    <Button ghost color="warning" className="ml-1">
      Warning
    </Button>
    <Button disabled className="ml-1">
      Disabled
    </Button>
  </React.Fragment>
);
