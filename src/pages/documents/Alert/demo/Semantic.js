import React from 'react';
import { PureAlert } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Semantic Title"
        className="mb-5"
      />
      <PureAlert
        type="info"
        title="Formal Title"
        className="mb-5"
      />
    </div>
  );
};

Demo.description = `
<Alert info /> ~ <Alert type="info" /> 
<Alert error /> ~ <Alert type="error" /> 
<Alert success /> ~ <Alert type="success" />
<Alert warning /> ~ <Alert type="warning" />
Yeah, I like the short one

<Alert info warning success /> ~ <Alert type="success" />
The last one will be work

<Alert type="warning" error success /> ~ <Alert type="warning" />
'type' will be override semantic prop

NOTE: Alert using PureAlert
`;

Demo.code = `
import React from 'react';
import { PureAlert } from '@/components/core';

const Demo = () => {
  return (
    <div className="w-full">
      <PureAlert
        info
        title="Semantic Title"
        className="mb-5"
      />
      <PureAlert
        type="info"
        title="Formal Title"
        className="mb-5"
      />
    </div>
  );
};
`;

export default Demo;
