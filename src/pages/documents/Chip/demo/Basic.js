import React  from 'react';
import { Chip } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Chip } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Chip
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};
`;

export default Demo;
