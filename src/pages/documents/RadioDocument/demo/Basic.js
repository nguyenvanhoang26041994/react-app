import React, { useState } from 'react';
import { Radio } from '../../../../components/core';

const Demo = () => {
  const [value, setValue] = useState();

  return (
    <div className="flex">
      <Radio
        className="mr-5"
        name="same"
        value="value-1"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-2"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-3"
        disabled
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

Demo.code = `
import React from 'react';
import { Radio } from '@/components/core';

export default () => {
  const [value, setValue] = useState();

  return (
    <div className="flex">
      <Radio
        className="mr-5"
        name="same"
        value="value-1"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-2"
        onChange={e => setValue(e.target.value)}
      />
      <Radio
        className="mr-5"
        name="same"
        value="value-3"
        disabled
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};
`;

export default Demo;
