import React from 'react';
import { Popconfirm, Button, Grid } from '../../../components/core';

export default () => (
  <Grid row>
    <Popconfirm title="Popconfirm title" placement="top">
      <Button>top</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="top-right">
      <Button className="ml-5">top-right</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="right-top">
      <Button className="ml-5">right-top</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="right">
      <Button className="ml-5">right</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="right-bottom">
      <Button className="ml-5">right-bottom</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="bottom-right">
      <Button className="ml-5">bottom-right</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="bottom">
      <Button className="ml-5">bottom</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="bottom-left">
      <Button className="ml-5">bottom-left</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="left-bottom">
      <Button className="ml-5">left-bottom</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="left">
      <Button className="ml-5">left</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="left-top">
      <Button className="ml-5">left-top</Button>
    </Popconfirm>
    <Popconfirm title="Popconfirm title" placement="top-left">
      <Button className="ml-5">top-left</Button>
    </Popconfirm>
  </Grid>
);
