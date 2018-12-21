import React from 'react';
import { Popconfirm, Button, Grid } from '../../../components/core';

const ButtonEnhance = Popconfirm.withPopconfirm(Button);

export default () => (
  <Grid row>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'top' }}
    >
      top
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'top-right' }}
      className="ml-5"
    >
      top-right
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'right-top' }}
      className="ml-5"
    >
      right-top
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'right' }}
      className="ml-5"
    >
      right
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'right-bottom' }}
      className="ml-5"
    >
      right-bottom
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'bottom-right' }}
      className="ml-5"
    >
      bottom-right
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'bottom' }}
      className="ml-5"
    >
      bottom
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'bottom-left' }}
      className="ml-5"
    >
      bottom-left
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'left-bottom' }}
      className="ml-5"
    >
      left-bottom
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'left' }}
      className="ml-5"
    >
      left
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'left-top' }}
      className="ml-5"
    >
      left-top
    </ButtonEnhance>
    <ButtonEnhance
      popconfirmProps={{ title: 'Tooltip title!', placement: 'top-left' }}
      className="ml-5"
    >
      top-left
    </ButtonEnhance>
  </Grid>
);
