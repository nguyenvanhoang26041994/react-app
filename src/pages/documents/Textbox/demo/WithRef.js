import React, { useCallback, useRef } from 'react';
import { Textbox } from '../../../../components/core';

const Demo = () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Textbox
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};

Demo.code = `
import React, { useCallback, useRef } from 'react';
import { Textbox } from '@/components/core';

export default () => {
  const ref = useRef();

  const onChange = useCallback(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <Textbox
      ref={ref}
      placeholder="The placeholder"
      onChange={onChange}
    />
  );
};
`;

export default Demo;
