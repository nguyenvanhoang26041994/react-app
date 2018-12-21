import React from 'react';
import { Popconfirm, Button, Grid, Icon } from '../../../components/core';

const ButtonEnhance = Popconfirm.withPopconfirm(Button);

export default () => (
  <Grid row>
    <ButtonEnhance
      popconfirmProps={{
        title: 'Tooltip title!',
        placement: 'top',
        okText: 'DONE',
        cancelText: <Icon icon="trash" />,
        propsOK: { color: 'success' },
        propsCancel: { color: 'error' },
      }}
    >
      top
    </ButtonEnhance>
  </Grid>
);
