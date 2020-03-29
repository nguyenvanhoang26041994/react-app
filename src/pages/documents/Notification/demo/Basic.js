import React, { useState, useCallback } from 'react';
import { Button, Notification, Avatar, Icon } from '../../../../components/core';

const avatarLink = 'https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=4HRhr-vve64AX_Kw3w6&_nc_ht=scontent-hkg3-1.xx&_nc_tp=6&oh=8241a9f1e3a6c8c4494c6534a693a342&oe=5EA4BE84';

const Demo = () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Notification title="Notification" open={open} onClose={onClose} duration={0}>
        <div className="flex">
          <Avatar src={avatarLink} name="Hoàng Nguyễn" className="mr-3 text-lg" />
          <div className="flex flex-col">
            <span>
              <a className="text-blue-600">Hoàng Nguyễn </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon name="globe" className="mr-2" fontSize="0.85em" />
              5 minues ago
            </div>
          </div>
        </div>
      </Notification>
      <Button onClick={onOpen}>Open Notification</Button>
    </div>
  );
};

Demo.code = `
import React, { useState, useCallback } from 'react';
import { Button, Notification, Avatar, Icon } from '@/components/core';

export default () => {
  const [open, setOpen] = useState();

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <div className="flex">
      <Notification title="Notification" open={open} onClose={onClose} duration={0}>
        <div className="flex">
          <Avatar src={avatarLink} name="Hoàng Nguyễn" className="mr-3 text-lg" />
          <div className="flex flex-col">
            <span>
              <a className="text-blue-600">Hoàng Nguyễn </a>
              send you a friend request
            </span>
            <div className="mt-1 text-gray-600">
              <Icon name="globe" className="mr-2" fontSize="0.85em" />
              5 minues ago
            </div>
          </div>
        </div>
      </Notification>
      <Button onClick={onOpen}>Open Notification</Button>
    </div>
  );
};
`;

export default Demo;
