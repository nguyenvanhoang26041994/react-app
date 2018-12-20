/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import ShapeDemo from './shape';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/button-demo/basic.js`,
  size: `${repo}/blob/master/app/modules/demo/button-demo/size.js`,
  ghost: `${repo}/blob/master/app/modules/demo/button-demo/ghost.js`,
  group: `${repo}/blob/master/app/modules/demo/button-demo/group.js`,
  link: `${repo}/blob/master/app/modules/demo/button-demo/link.js`,
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
          code={`
<React.Fragment>
  <Avatar />
  <Avatar name="Hoang" />
  <Avatar name="Hoang" color="purple" />
  <Avatar name="Hoang" color="dodgerblue" />
  <Avatar
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
  />
</React.Fragment>
        `}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox
          title="Size"
          className="mb-5"
          link={links.basic}
          code={`
<React.Fragment>
  <Avatar
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
    size="small"
  />
  <Avatar
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
  />
  <Avatar
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
    size="large"
  />
  <Avatar
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
    size="100px"
  />
</React.Fragment>
        `}>
          <div className="flex items-end">
            <SizeDemo />
          </div>
        </ExampleBox>
        <ExampleBox
          title="Shape"
          className="mb-5"
          link={links.basic}
          code={`
<React.Fragment>
  <Avatar
    shape="circle"
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
    size="100px"
  />
  <Avatar
    shape="square"
    src="https://www.mobafire.com/images/avatars/yasuo-nightbringer.png"
    size="100px"
  />
</React.Fragment>
        `}>
          <ShapeDemo />
        </ExampleBox>
        <ExampleBox
          col
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
