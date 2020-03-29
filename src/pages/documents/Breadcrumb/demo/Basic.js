import React from 'react';
import { Breadcrumb } from '../../../../components/core';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title="Home"/>
      <Breadcrumb.Item title="Components"/>
      <Breadcrumb.Item title="Breadcrumb"/>
    </Breadcrumb>
  );
};

Demo.code = `
import React from 'react';
import { Breadcrumb } from '@/components/core';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title="Home"/>
      <Breadcrumb.Item title="Components"/>
      <Breadcrumb.Item title="Breadcrumb"/>
    </Breadcrumb>
  );
};
`;

export default Demo;
