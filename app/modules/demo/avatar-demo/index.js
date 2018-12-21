/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import ShapeDemo from './shape';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/avatar-demo/basic.js`,
  size: `${repo}/blob/master/app/modules/demo/avatar-demo/size.js`,
  shape: `${repo}/blob/master/app/modules/demo/avatar-demo/shape.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col flex="auto">
        <ExampleBox
          title="Basic used"
          className="mb-5"
          link={links.basic}
        >
          <BasicDemo />
        </ExampleBox>
        <ExampleBox
          title="Size"
          className="mb-5"
          link={links.size}
        >
          <div className="flex items-end">
            <SizeDemo />
          </div>
        </ExampleBox>
        <ExampleBox
          title="Shape"
          className="mb-5"
          link={links.shape}
        >
          <ShapeDemo />
        </ExampleBox>
        <ExampleBox
          title="Avatar"
          className="mb-5"
          code={`
export const sizes = Object.freeze({
  small: 'rc-avatar--small',
  large: 'rc-avatar--large',
});

export const shapes = Object.freeze({
  square: 'rc-avatar--square',
  circle: 'rc-avatar--circle',
});

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.oneOf([Object.keys(sizes)]),
    PropTypes.string,
    PropTypes.number,
  ]),
  shape: PropTypes.oneOf(Object.keys(shapes)),
  onClick: PropTypes.func,
};
Avatar.defaultProps = {
  shape: 'circle',
};  
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
