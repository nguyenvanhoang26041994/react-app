import React, { useState, useCallback } from 'react';
import { Textarea } from '../../../../components/core';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Textarea
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

Demo.code = `
import React from 'react';
import { Textarea } from '@/components/core';

export default () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Textarea
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};
`;

export default Demo;
