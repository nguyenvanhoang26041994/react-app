import React from 'react';
import cn from 'classnames';
import { Chip, Avatar } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

const src = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center flex-wrap" header="CHIP">
      <Chip label="Hoang" className="m-1" />
      <Chip label="Hoang" avatar={<Avatar name="Hoang" src={src} />} className="m-1" />
      <Chip closable label="Hoang" className="m-1" />
      <Chip label="Hoang" avatar={<Avatar name="Hoang" src={src} />} className="m-1" closable />
    </PracticeBox>
  );
};
