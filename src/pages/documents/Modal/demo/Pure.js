import React from 'react';
import { PureModal } from '../../../../components/core';

const Demo = () => {
  return (
    <PureModal title="Confirm Title">
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureModal>
  );
};

Demo.code = `
import React from 'react';
import { PureModal } from '@/components/core';

const Demo = () => {
  return (
    <PureModal
      title="Confirm Title"
    >
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </PureModal>
  );
};
`;

export default Demo;
