import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '../../../../components/core';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        title="Drawer Title"
        className="w-1/3"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Drawer } from '@/components/core';

export default () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Drawer
        open={open}
        onClose={onClose}
        title="Drawer Title"
        className="w-1/3"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Drawer>
      <Button onClick={onOpen}>Open Drawer</Button>
    </div>
  );
};
`;

export default Demo;
