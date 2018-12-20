import React from 'react';
import { Pagination, Grid } from '../../../components/core';

export default class Demo extends React.Component {
  state = { total: 1000, page: 10, pageSize: 5 };

  changePage = page => this.setState({ page });

  changePageSize = pageSize => this.setState({ pageSize });

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
