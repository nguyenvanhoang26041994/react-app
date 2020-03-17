import React, { useState } from 'react';
import cn from 'classnames';
import { Pagination } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  const [page, setPage] = useState(3);
  return (
    <PracticeBox wrapperClassName={className} className="flex justify-center flex-col" header="PAGINATION">
      <Pagination total={200} pageSize={10} max={7} className="mb-2" />
      <Pagination total={200} pageSize={10} max={7} page={page} onPageChange={val => setPage(val)} className="mb-2" />
    </PracticeBox>
  );
};
