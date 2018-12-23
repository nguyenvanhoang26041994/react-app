import React from 'react';
import { Avatar } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Avatar
      shape="circle"
      src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
      size="100px"
    />
    <Avatar
      shape="square"
      src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
      className="ml-3"
      size="100px"
    />
  </React.Fragment>
);
