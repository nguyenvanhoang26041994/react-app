import React from 'react';
import { Tooltip, Button, Grid } from '../../../components/core';

export default () => (
  <Grid row>
    <Tooltip title="Tooltip title" placement="top">
      <Button>top</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="top-right">
      <Button className="ml-5">top-right</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="right-top">
      <Button className="ml-5">right-top</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="right">
      <Button className="ml-5">right</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="right-bottom">
      <Button className="ml-5">right-bottom</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="bottom-right">
      <Button className="ml-5">bottom-right</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="bottom">
      <Button className="ml-5">bottom</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="bottom-left">
      <Button className="ml-5">bottom-left</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="left-bottom">
      <Button className="ml-5">left-bottom</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="left">
      <Button className="ml-5">left</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="left-top">
      <Button className="ml-5">left-top</Button>
    </Tooltip>
    <Tooltip title="Tooltip title" placement="top-left">
      <Button className="ml-5">top-left</Button>
    </Tooltip>
  </Grid>
);
