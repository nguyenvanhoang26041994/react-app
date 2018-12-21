import React from 'react';
import { Popconfirm, Button, Grid } from '../../../components/core';

const ButtonEnhance = Popconfirm.withPopconfirm(Button);

export default () => (
  <Grid row>
    <ButtonEnhance
      popconfirmProps={{
        title: 'Tooltip title!',
        placement: 'top',
        onOK: () => console.log('onOK'),
        onCancel: () => console.log('onCancel'),
      }}
    >
      top
    </ButtonEnhance>
  </Grid>
);
