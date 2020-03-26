import React from 'react';
import cn from 'classnames';
import { Textarea } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  return (
    <div className={cn('', className)}>
      <PracticeBox className="flex flex-col" header="TEXTAREA">
        <Textarea
          className="mb-2"
          label="Textarea Label"
          placeholder="Textarea placeholder"
        />
        <Textarea
          placeholder="Textarea placeholder"
        />
      </PracticeBox>
    </div>
  );
};
