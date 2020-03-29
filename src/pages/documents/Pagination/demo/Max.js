import React, { useState, useCallback } from 'react';
import { Pagination } from '../../../../components/core';

const Demo = () => {
  const [activePage, setActivePage] = useState(1);
  const onChange = useCallback((page) => setActivePage(page), []);

  return (
    <Pagination
      activePage={activePage}
      total={300}
      pageSize={10}
      max={10}
      onChange={onChange}
    />
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Pagination } from '@/components/core';

export default () => {
  const [activePage, setActivePage] = useState(1);
  const onChange = useCallback((page) => setActivePage(page), []);

  return (
    <Pagination
      activePage={activePage}
      total={300}
      pageSize={10}
      max={10}
      onChange={onChange}
    />
  );
};
`;

export default Demo;
