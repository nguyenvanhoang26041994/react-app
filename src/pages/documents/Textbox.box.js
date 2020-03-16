import React from 'react';
import cn from 'classnames';
import { Textbox } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <div className={cn('', className)}>
      <PracticeBox className="flex flex-col" header="TEXTBOX" wrapperClassName="mb-2">
        <Textbox
          className="mb-2"
          label="Textbox Label"
          placeholder="Textbox placeholder"
        />
        <Textbox
          htmlType="password"
          label="Password Label"
          placeholder="Password placeholder"
        />
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Textbox
          placeholder="Textbox placeholder"
        />
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Textbox
          className="mb-2"
          label="Textbox Label"
          error="Textbox error"
          placeholder="Textbox placeholder"
        />
        <Textbox
          className="mb-2"
          error="Textbox error"
          placeholder="Textbox placeholder"
        />
      </PracticeBox>
    </div>
  );
};
