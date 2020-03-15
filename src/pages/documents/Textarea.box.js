import React from 'react';
import cn from 'classnames';
import { Textarea } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <div className={cn('', className)}>
      <PracticeBox className="flex flex-col" header="TEXTAREA" wrapperClassName="mb-2">
        <Textarea
          label="Textarea Label"
          placeholder="Textarea placeholder"
        />
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Textarea
          placeholder="Textarea placeholder"
        />
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Textarea
          className="mb-2"
          label="Textarea Label"
          error="Textarea error"
          placeholder="Textarea placeholder"
        />
        <Textarea
          className="mb-2"
          error="Textarea error"
          placeholder="Textarea placeholder"
        />
      </PracticeBox>
    </div>
  );
};
