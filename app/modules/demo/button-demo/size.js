import React from 'react';
import { Button } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Button size="small" color="primary">
      Small
    </Button>
    <Button color="primary" className="ml-1">
      Basic
    </Button>
    <Button size="large" color="primary" className="ml-1">
      Large
    </Button>
  </React.Fragment>
);
