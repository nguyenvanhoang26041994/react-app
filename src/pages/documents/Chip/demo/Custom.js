import React  from 'react';
import { Chip } from '../../../../components/core';

const Demo = () => {
  return (
    <div className="flex">
      <Chip
        closable
        backgroundColor="#0089e4"
        color="#ffffff"
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        closable
        color="#ffffff"
        backgroundColor="#ec4c1c"
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        closable
        backgroundColor="teal"
        color="aqua"
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
        closable
        backgroundColor="#0089e4"
        color="#ffffff"
        className="mr-2"
        label="Hoàng Nguyễn"
        onClick={() => console.log('Hoàng Nguyễn')}
      />
      <Chip
        closable
        color="#ffffff"
        backgroundColor="#ec4c1c"
        className="mr-2"
        label="Sơn Lê"
        onClick={() => console.log('Sơn Lê')}
      />
      <Chip
        closable
        backgroundColor="teal"
        color="aqua"
        className="mr-2"
        label="Owner"
        onClick={() => console.log('Owner')}
      />
    </div>
  );
};
`;

export default Demo;
