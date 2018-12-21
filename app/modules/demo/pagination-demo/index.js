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
        <ExampleBox title="Max" className="mb-5" link={links.basic}>
          <MaxDemo />
        </ExampleBox>
        <ExampleBox title="Default page" className="mb-5" link={links.basic}>
          <DefaultPage />
        </ExampleBox>
        <ExampleBox title="Default page size" className="mb-5" link={links.basic}>
          <DefaultPageSize />
        </ExampleBox>
        <ExampleBox title="Page size" className="mb-5" link={links.basic}>
          <PageSizeDemo />
        </ExampleBox>
        <ExampleBox title="Page" className="mb-5" link={links.basic}>
          <PageDemo />
        </ExampleBox>
        <ExampleBox
          title="Render Item"
          className="mb-5"
          link={links.basic}
        >
          <RenderItemDemo />
        </ExampleBox>
        <ExampleBox
          title="Full Feature"
          className="mb-5"
          link={links.basic}
        >
          <FullFeatureDemo />
        </ExampleBox>
        <ExampleBox
          title="Pagination"
          className="mb-5"
          code={`
Pagination.propTypes = {
  className: PropTypes.string,
  renderItem: PropTypes.func,
  page: PropTypes.number,
  defaultPage: PropTypes.number,
  pageSize: PropTypes.number,
  defaultPageSize: PropTypes.number,
  total: PropTypes.number,
  max: PropTypes.oneOf([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]),
  onChange: PropTypes.func,
};
Pagination.defaultProps = {
  defaultPage: 1,
  defaultPageSize: 10,
  total: 0,
  max: 5,
  onChange: f => f,
  renderItem: i => <span>{i}</span>,
};   
          `}
        />

        <ExampleBox
          title="Pagination.Options"
          className="mb-5"
          code={`
Options.displayName = 'Pagination.Options';
Options.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
};
Options.defaultProps = {
  options: [5, 10, 20, 30, 40, 50],
}; 
          `}
        />

        <ExampleBox
          title="Pagination.Total"
          className="mb-5"
          code={`
const defaultRender = ({ total, from, to }) => ( // eslint-disable-line
  <div className={cn('rc-pagination-total')}>
    {from} - {to} of {total} records
  </div>
);

Total.displayName = 'Pagination.Total';
Total.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  render: PropTypes.func,
};
Total.defaultProps = {
  page: 0,
  pageSize: 0,
  total: 0,
  render: defaultRender,
};
          `}
        />
      </Grid>
    );
  }
}

export default Demo;
