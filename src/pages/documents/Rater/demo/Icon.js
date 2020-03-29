import React, { useState, useCallback } from 'react';
import { Rater } from '../../../../components/core';

const Demo = () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      icon="heart"
      star={star}
      onChange={onChange}
    />
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Rater } from '@/components/core';

export default () => {
  const [star, setStar] = useState(1);
  const onChange = useCallback((star) => setStar(star), []);

  return (
    <Rater
      icon="heart"
      star={star}
      onChange={onChange}
    />
  );
};
`;

export default Demo;
