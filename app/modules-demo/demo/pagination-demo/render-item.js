import React from 'react';
import { Pagination } from '../../../components/core';

export default () => (
  <Pagination
    total={1000}
    renderItem={item => <span style={{ color: 'purple' }}>{item}</span>}
    onChange={(e, data) => console.log(data)}
  />
);
