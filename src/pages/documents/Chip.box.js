import React from 'react';
import cn from 'classnames';
import { Chip, Avatar } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="CHIP">
      <Chip label="Hoang Nguyen" className="mr-2" />
      <Chip closable label="Hoang Nguyen" className="mr-2" />
    </PracticeBox>
  );
};
