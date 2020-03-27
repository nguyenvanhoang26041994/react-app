import React, { useState, useCallback } from 'react';
import { Button, Confirm } from '../../../../components/core';

const Demo = () => {
  const onOpen = useCallback(() => {
    Confirm.push({
      title: 'Confirm Title',
      onOk: () => console.log('OK'),
      onCancel: () => console.log('CANCEL'),
      children: 'What is Lorem Ipsum?',
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Confirm } from '@/components/core';

export default () => {
  const onOpen = useCallback(() => {
    Confirm.push({
      title: 'Confirm Title',
      onOk: () => console.log('OK'),
      onCancel: () => console.log('CANCEL'),
      children: 'What is Lorem Ipsum?',
    })
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};
`;

export default Demo;
