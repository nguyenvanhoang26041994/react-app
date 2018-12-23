/* eslint-disable */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

const repo = 'https://github.com/nguyenvanhoang26041994/react-components';

const links = {
  basic: `${repo}/blob/master/app/modules/demo/grid-demo/basic.js`,
  row: `${repo}/blob/master/app/modules/demo/grid-demo/row.js`,
  col: `${repo}/blob/master/app/modules/demo/grid-demo/col.js`,
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox
          title="Basic used"
          className="mb-5"
          link={links.basic}
          code={`
BASIC
<Grid />
...
<div class="border-box flex flex-auto" />



DIRECTION
<Grid row />
...
<div class="border-box flex flex-auto flex-row" />


<Grid col />
...
<div class="border-box flex flex-auto flex-col" />


<Grid reverse row />
...
<div class="border-box flex flex-auto flex-row-reverse" />


<Grid reverse col />
...
<div class="border-box flex flex-auto flex-col-reverse" />





JUSTIFY
<Grid justify="start" />
...
<div class="border-box flex flex-auto justify-start" />


<Grid justify="center" />
...
<div class="border-box flex flex-auto justify-center" />


<Grid justify="end" />
...
<div class="border-box flex flex-auto justify-end" />


<Grid justify="between" />
...
<div class="border-box flex flex-auto justify-between" />


<Grid justify="around" />
...
<div class="border-box flex flex-auto justify-around" />




ALIGN ITEMS
<Grid items="stretch" />
...
<div class="border-box flex flex-auto items-stretch" />


<Grid items="start" />
...
<div class="border-box flex flex-auto items-start" />


<Grid items="center" />
...
<div class="border-box flex flex-auto items-center" />


<Grid items="end" />
...
<div class="border-box flex flex-auto items-end" />


<Grid items="baseline" />
...
<div class="border-box flex flex-auto items-baseline" />





WRAP
<Grid wrap />
...
<div class="border-box flex flex-auto flex-wrap" />


<Grid nowrap />
...
<div class="border-box flex flex-auto flex-no-wrap" />


<Grid wrap="reverse" />
...
<div class="border-box flex flex-auto flex-wrap-reverse" />






GROW
<Grid grow />
...
<div class="border-box flex flex-auto flex-grow" />


<Grid noGrow /> /* noGrow look cooler than grow={false} right? */
...
<div class="border-box flex flex-auto flex-no-grow" />







SHRINK
<Grid shrink />
...
<div class="border-box flex flex-auto flex-shrink" />


<Grid noShrink /> /* noShrink look cooler than shrink={false} right? */
...
<div class="border-box flex flex-auto flex-no-shrink" />








FLEX
<Grid flex="1" />
...
<div class="border-box flex flex-auto flex-1" />


<Grid flex="initial" />
...
<div class="border-box flex flex-auto flex-initial" />


<Grid flex="auto" />
...
<div class="border-box flex flex-auto flex-auto" />


<Grid flex="none" />
...
<div class="border-box flex flex-auto flex-none" />











ALIGN CONTENT
<Grid content="start" />
...
<div class="border-box flex flex-auto content-start" />


<Grid content="center" />
...
<div class="border-box flex flex-auto content-center" />


<Grid content="end" />
...
<div class="border-box flex flex-auto content-end" />


<Grid content="between" />
...
<div class="border-box flex flex-auto content-between" />


<Grid content="around" />
...
<div class="border-box flex flex-auto content-around" />









ALIGN SELF
<Grid self="auto" />
...
<div class="border-box flex flex-auto self-auto" />


<Grid self="start" />
...
<div class="border-box flex flex-auto self-start" />


<Grid self="center" />
...
<div class="border-box flex flex-auto self-center" />


<Grid self="end" />
...
<div class="border-box flex flex-auto self-end" />


<Grid self="stretch" />
...
<div class="border-box flex flex-auto self-stretch" />
          `}
          >
          <div className="flex flex-col flex-auto">
            <span className="mb-8">
              Grid base on flex-box and using tailwind.css utillities. So Grid do not
              have own css styling. You should to known how to make layout by flex-box
              first. Grid just provide the easy way to pass utillities class.
              Anyway, maybe Grid should be rename to Flex and Grid will the name the layout using display: grid.
              However. display: grid not working well with cross browser.
              We will keep using Grid name for this Component name.
            </span>
          </div>
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
