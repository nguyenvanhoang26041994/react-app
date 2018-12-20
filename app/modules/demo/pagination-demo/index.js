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
        <ExampleBox col title="Basic used" className="mb-5" link={links.basic} code={`<Pagination total={1000} onChange={(e, data) => console.log(data)} />`}>
          <BasicDemo />
        </ExampleBox>
        <ExampleBox col title="Max" className="mb-5" link={links.basic} code={`<Pagination total={1000} max={9} onChange={(e, data) => console.log(data)} />`}>
          <MaxDemo />
        </ExampleBox>
        <ExampleBox col title="Default page" className="mb-5" link={links.basic} code={`<Pagination total={1000} defaultPage={10} onChange={(e, data) => console.log(data)} />`}>
          <DefaultPage />
        </ExampleBox>
        <ExampleBox col title="Default page size" className="mb-5" link={links.basic} code={`<Pagination total={1000} defaultPageSize={50} onChange={(e, data) => console.log(data)} />`}>
          <DefaultPageSize />
        </ExampleBox>
        <ExampleBox col title="Page size" className="mb-5" link={links.basic} code={`<Pagination total={1000} pageSize={50} onChange={(e, data) => console.log(data)} />`}>
          <PageSizeDemo />
        </ExampleBox>
        <ExampleBox col title="Page" className="mb-5" link={links.basic} code={`<Pagination total={1000} page={10} pageSize={50} onChange={(e, data) => console.log(data)} />`}>
          <PageDemo />
        </ExampleBox>
        <ExampleBox
          col
          title="Render Item"
          className="mb-5"
          link={links.basic}
          code={`
<Pagination
  total={1000}
  renderItem={item => <span style={{ color: 'purple' }}>{item}</span>}
  onChange={(e, data) => console.log(data)}
/>
`}>
          <RenderItemDemo />
        </ExampleBox>
        <ExampleBox
          col
          title="Full Feature"
          className="mb-5"
          link={links.basic}
          code={`
export default class Demo extends React.Component {
  state = { total: 1000, page: 10, pageSize: 5 };

  changePage = page => this.setState({ page });

  changePageSize = pageSize => this.setState({ pageSize });

  onChangePageSize = (e, data) => this.setState({ pageSize: data.pageSize });

  render() {
    const { page, pageSize, total } = this.state;

    return (
      <Grid row items="center">
        <Pagination.Total total={total} page={page} pageSize={pageSize} />
        <Pagination
          className="ml-1"
          total={total}
          page={page}
          max={9}
          pageSize={pageSize}
          onChange={(e, data) => this.changePage(data.page)}
        />
        <Pagination.Options
          className="ml-1"
          options={[5, 10, 30, 50, 100]}
          value={pageSize}
          onChange={e => this.changePageSize(e.target.value)}
        />
      </Grid>
    );
  }
}
`}>
          <FullFeatureDemo />
        </ExampleBox>
        <ExampleBox
          col
          title="Pagination" className="mb-5"
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
          col
          title="Pagination.Options" className="mb-5"
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
          col
          title="Pagination.Total" className="mb-5"
          code={`
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
