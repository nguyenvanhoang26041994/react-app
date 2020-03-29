import React from 'react';
import { PureAlert } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Info Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
      <PureAlert
        error
        title="Error Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
      <PureAlert
        warning
        title="Warning Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
      <PureAlert
        success
        title="Success Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
    </div>
  );
};

Demo.code = `
import React from 'react';
import { PureAlert } from '@/components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Info Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
      <PureAlert
        error
        title="Error Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
      <PureAlert
        warning
        title="Warning Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
      <PureAlert
        success
        title="Success Title"
        className="mb-5"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </PureAlert>
    </div>
  );
};
`;

export default Demo;
