import React from 'react';
import { Breadcrumb, Icon } from '../../../../components/core';

const Demo = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title={<Icon name="home" />} />
      <Breadcrumb.Item title={<Icon name="desktop" />} />
      <Breadcrumb.Item title="Breadcrumb" />
    </Breadcrumb>
  );
};

Demo.code = `
import React from 'react';
import { Breadcrumb, Icon } from '@/components/core';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item title={<Icon name="home" />} />
      <Breadcrumb.Item title={<Icon name="desktop" />} />
      <Breadcrumb.Item title="Breadcrumb" />
    </Breadcrumb>
  );
};
`;

export default Demo;
