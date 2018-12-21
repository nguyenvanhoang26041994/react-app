import React from 'react';
import { Pagination } from '../../../components/core';

export default () => (
  <Pagination total={1000} onChangePage={e => console.log(e)} />
);
