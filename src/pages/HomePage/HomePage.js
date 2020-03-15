import React from 'react';
import ButtonBox from '../documents/Button.box';
import TextboxBox from '../documents/Textbox.box';
import TextareaBox from '../documents/Textarea.box';
import SelectBox from '../documents/Select.box';

export default () => {
  return (
    <div className="container mx-auto">
      <div className="w-1/3">
        <ButtonBox className="mb-20" />
        <TextboxBox className="mb-20" />
        <TextareaBox className="mb-20" />
        <SelectBox className="mb-20" />
      </div>
    </div>
  );
};
