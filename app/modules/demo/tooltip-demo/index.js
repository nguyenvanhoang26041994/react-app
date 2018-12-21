/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import HOCDemo from './hoc';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/tooltip-demo/basic.js`,
  hoc: `${repo}/blob/master/app/modules/demo/tooltip-demo/hoc.js`,
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
          title="Flat with HOC"
          className="mb-5"
          link={links.hoc}
          code={`
const ButtonEnhance = Tooltip.withTooltip(Button);
<ButtonEnhance tooltipProps={ title: ..., placement: ... } />
        `}>
          <HOCDemo />
        </ExampleBox>
        <ExampleBox
          title="Tooltip"
          className="mb-5"
          code={`
const placements = Object.freeze({
  top: 'rc-tooltip--top',
  bottom: 'rc-tooltip--bottom',
  left: 'rc-tooltip--left',
  right: 'rc-tooltip--right',
  'top-left': 'rc-tooltip--top-left',
  'left-top': 'rc-tooltip--left-top',
  'top-right': 'rc-tooltip--top-right',
  'right-top': 'rc-tooltip--right-top',
  'bottom-left': 'rc-tooltip--bottom-left',
  'left-bottom': 'rc-tooltip--left-bottom',
  'bottom-right': 'rc-tooltip--bottom-right',
  'right-bottom': 'rc-tooltip--right-bottom',
});

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  placement: PropTypes.oneOf(Object.keys(placements)),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
};
Tooltip.defaultProps = {
  placement: 'top',
};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
