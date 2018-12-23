import React from 'react';
import { Pagination } from '../../../components/core';

export default () => (
  <Pagination total={1000} max={9} onChange={(e, data) => console.log(data)} />
);
