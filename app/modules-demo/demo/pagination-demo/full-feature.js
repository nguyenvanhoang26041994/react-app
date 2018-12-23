import React from 'react';
import { Pagination, Grid } from '../../../components/core';

export default class Demo extends React.Component {
  state = { total: 1000, page: 10, pageSize: 5 };

  onChangePage = e => this.setState({ page: e.target.value });

  onChangePageSize = e => this.setState({ pageSize: e.target.value });

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
          onChangePage={this.onChangePage}
        />
        <Pagination.Options
          className="ml-1"
          options={[5, 10, 30, 50, 100]}
          value={pageSize}
          onChange={this.onChangePageSize}
        />
      </Grid>
    );
  }
}
