import React from 'react';
import { Avatar } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Avatar />
    <Avatar name="Hoang" className="ml-1" />
    <Avatar name="Hoang" color="purple" className="ml-1" />
    <Avatar name="Hoang" color="dodgerblue" className="ml-1" />
    <Avatar
      src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
      className="ml-1"
    />
  </React.Fragment>
);
