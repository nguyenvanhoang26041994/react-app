import React, { useState, useCallback } from 'react';
import { Button, Modal } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={onClose}
        title="Modal Title"
        canOutsideClickClose
      >
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Modal } from '@/components/core';

export default () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Modal
        open={open}
        onClose={onClose}
        title="Modal Title"
        canOutsideClickClose
      >
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Modal>
      <Button onClick={onOpen}>Open Modal</Button>
    </div>
  );
};
`;

export default Demo;
