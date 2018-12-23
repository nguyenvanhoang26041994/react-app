/* eslint-disable prettier/prettier */
import React from 'react';

import { Grid } from '../../../components/core';
import ExampleBox from '../../ExampleBox';

import BasicDemo from './basic';
import DefaultPage from './default-page';
import DefaultPageSize from './default-page-size';
import PageSizeDemo from './page-size';
import PageDemo from './page';
import MaxDemo from './max';
import RenderItemDemo from './render-item';
import FullFeatureDemo from './full-feature';

const links = {
  basic: 'app/modules-demo/demo/pagination-demo/basic.js',
  'default-page': 'app/modules-demo/demo/pagination-demo/default-page.js',
  'default-page-size': 'app/modules-demo/demo/pagination-demo/default-page-size.js',
  'page-size': 'app/modules-demo/demo/pagination-demo/page-size.js',
  page: 'app/modules-demo/demo/pagination-demo/page.js',
  max: 'app/modules-demo/demo/pagination-demo/max.js',
  'render-item': 'app/modules-demo/demo/pagination-demo/render-item.js',
  'full-feature': 'app/modules-demo/demo/pagination-demo/full-feature.js',
};

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <Grid col wrap flex="auto">
        <ExampleBox title="Basic used" className="mb-5" link={links.basic}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox title="Max" className="mb-5" link={links.max}>
          <MaxDemo />
        </ExampleBox>
        <ExampleBox title="Default page" className="mb-5" link={links['default-page']}>
          <DefaultPage />
        </ExampleBox>
        <ExampleBox title="Default page size" className="mb-5" link={links['default-page-size']}>
          <DefaultPageSize />
        </ExampleBox>
        <ExampleBox title="Page size" className="mb-5" link={links['page-size']}>
          <PageSizeDemo />
        </ExampleBox>
        <ExampleBox title="Page" className="mb-5" link={links.page}>
          <PageDemo />
        </ExampleBox>
        <ExampleBox
          title="Render Item"
          className="mb-5"
          link={links['render-item']}
        >
          <RenderItemDemo />
        </ExampleBox>
        <ExampleBox
          title="Full Feature"
          className="mb-5"
          link={links['full-feature']}
        >
          <FullFeatureDemo />
        </ExampleBox>
      </Grid>
    );
  }
}

export default Demo;
