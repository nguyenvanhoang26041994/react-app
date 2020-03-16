import React from 'react';
import cn from 'classnames';
import { Pagination } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="PAGINATION">
      <Pagination total={200} pageSize={10} max={7} />
    </PracticeBox>
  );
};
