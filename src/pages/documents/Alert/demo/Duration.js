import React, { useCallback } from 'react';
import { Button, helper } from '../../../../components/core';

const Demo = () => {
  const onOpen5 = useCallback(() => {
    helper.pushAlert({
      success: true,
      title: 'Close after 5 second',
      duration: 5000,
      children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    });
  }, []);

  const onOpen = useCallback(() => {
    helper.pushAlert({
      success: true,
      title: 'You must close manual',
      duration: 0,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen5} className="mr-4">5 second</Button>
      <Button onClick={onOpen}>No auto close</Button>
    </div>
  );
};

Demo.code = `
import React, { useCallback } from 'react';
import { Button, helper } from '@/components/core';

export default () => {
  const onOpen5 = useCallback(() => {
    helper.pushAlert({
      success: true,
      title: 'Close after 5 second',
      duration: 5000,
      children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    });
  }, []);

  const onOpen = useCallback(() => {
    helper.pushAlert({
      success: true,
      title: 'You must close manual',
      duration: 0,
    });
  }, []);

  return (
    <div className="flex">
      <Button onClick={onOpen5} className="mr-4">5 second</Button>
      <Button onClick={onOpen}>No auto close</Button>
    </div>
  );
};
`;

export default Demo;
