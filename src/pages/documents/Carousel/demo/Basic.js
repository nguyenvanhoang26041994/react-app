import React from 'react';
import { Carousel, Icon } from '../../../../components/core';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Demo = () => {
  return (
    <Carousel>
      {listProduct.map(id => (
        <Carousel.Item key={id}>
          <div
            className="neumorphism flex items-center justify-center p-2 m-1"
            style={{
              borderRadius: '1rem',
              height: '20rem',
              width: '16rem',
            }}
          >
          <Icon name="comments" fontSize="5rem" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

Demo.code = `
import React from 'react';
import { Avatar } from '@/components/core';

export default () => {
  return (
    <div className="flex">
      <Avatar
        src={avatarLink}
        className="mr-3"
        name="Hoàng Nguyễn"
      />
      <Avatar
        src={avatarLink}
        className="mr-3"
        square
        name="Hoàng Nguyễn"
      />
    </div>
  );
};
`;

export default Demo;
