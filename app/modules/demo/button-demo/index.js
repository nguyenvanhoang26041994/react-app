/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import SizeDemo from './size';
import GhostDemo from './ghost';
import GroupDemo from './group';
import LinkDemo from './link';

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
      <Grid col wrap flex="auto">
        <ExampleBox title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox title="Size" className="mb-5" link={links.size}>
          <div className="flex items-end">
            <SizeDemo />
          </div>
        </ExampleBox>
        <ExampleBox title="Ghost mode" className="mb-5" link={links.ghost}>
          <GhostDemo />
        </ExampleBox>
        <ExampleBox
          title="Group"
          className="mb-5"
          link={links.group}
        >
          <GroupDemo />
        </ExampleBox>
        <ExampleBox
          title="Link Button"
          className="mb-5"
        >
          <LinkDemo />
        </ExampleBox>
        <ExampleBox
          title="Button"
          className="mb-5"
          code={`
export const sizes = Object.freeze({
  small: 'rc-button--small',
  large: 'rc-button--large',
});
export const colors = Object.freeze({
  primary: 'rc-button--primary',
  error: 'rc-button--error',
  warning: 'rc-button--warning',
  success: 'rc-button--success',
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Object.keys(colors)),
  ghost: PropTypes.bool,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  buttonRef: PropTypes.any,
  children: PropTypes.any,
};
Button.defaultProps = {
  htmlType: 'button',
};
          `}
        />
        <ExampleBox
          title="Button.Group"
          className="mb-5"
          code={`
GroupButton.displayName = 'Button.Group';
GroupButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
GroupButton.defaultProps = {};
          `}
        />
        <ExampleBox
          title="Button.Link"
          className="mb-5"
          code={`
LinkButton.displayName = 'Button.Link';
LinkButton.propTypes = {
  className: PropTypes.string,
  linkClass: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_top', '_self', '_parent']),
  children: PropTypes.node,
};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
