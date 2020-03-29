import React from 'react';
import { PureAlert } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Info Title"
        className="mb-5"
        closable={false}
      />
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
        closable={false}
      />
    </div>
  );
};
`;

export default Demo;
