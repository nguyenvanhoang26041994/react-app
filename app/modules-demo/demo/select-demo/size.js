import React from 'react';
import { Select, SelectNative, Grid } from '../../../components/core';

export default () => (
  <Grid items="end">
    <SelectNative size="small" />
    <Select size="small" className="ml-1" />
    <SelectNative className="ml-5" />
    <Select className="ml-1" />
    <SelectNative size="large" className="ml-5" />
    <Select size="large" className="ml-1" />
  </Grid>
);
