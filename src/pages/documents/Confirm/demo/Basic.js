import React, { useState, useCallback } from 'react';
import { Button, Confirm } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onCancel = useCallback(() => console.log('CANCEL'), []);
  const onClose = useCallback(() => setOpen(false), []);
  const onOk = useCallback(() => console.log('OK'), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Confirm
        open={open}
        onClose={onClose}
        onCancel={onCancel}
        onOk={onOk}
        title="Confirm Title"
      >
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Confirm>
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Confirm } from '@/components/core';

export default () => {
  const [open, setOpen] = useState();

  const onCancel = useCallback(() => console.log('CANCEL'), []);
  const onClose = useCallback(() => setOpen(false), []);
  const onOk = useCallback(() => console.log('OK'), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Confirm
        open={open}
        onClose={onClose}
        onCancel={onCancel}
        onOk={onOk}
        title="Confirm Title"
      >
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Confirm>
      <Button onClick={onOpen}>Open Confirm</Button>
    </div>
  );
};
`;

export default Demo;
