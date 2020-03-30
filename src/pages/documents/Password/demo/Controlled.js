import React, { useState, useCallback } from 'react';
import { Password } from '../../../../components/core';

const Demo = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Password
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};

Demo.code = `
import React from 'react';
import { Password } from '@/components/core';

export default () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);

  return (
    <Password
      placeholder="The placeholder"
      value={value}
      onChange={onChange}
    />
  );
};
`;

export default Demo;
