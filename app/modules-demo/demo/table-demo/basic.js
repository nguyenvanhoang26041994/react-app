/* eslint-disable no-console, no-alert */
import React from 'react';
import {
  Table,
  Button,
  Pagination,
  Grid,
  Switch,
  Icon,
} from '../../../components/core';

const data = [
  {
    name: 'Hoang',
    age: '24',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan',
    job: 'Developer',
    skill: ['ReactJS', 'NodeJS'],
    single: true,
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
  {
    name: 'Minh',
    age: '22',
    subname: 'Van',
    sex: 'male',
    school: 'Duy tan2',
    job: 'UI/UX Design',
    skill: ['ReactJS', 'NodeJS'],
  },
];

class Demo extends React.Component {
  columns = [
    {
      title: 'Subname',
      index: 'subname',
    },
    {
      title: 'Name',
      index: 'name',
      className: 'over-ridecss',
    },
    {
      title: 'Single?',
      index: 'single',
      render: record => <Switch checked={record.single} />,
    },
    {
      title: 'Age',
      index: 'age',
      align: 'right',
    },
    {
      title: 'Sex',
      index: 'sex',
    },
    {
      title: 'School',
      index: 'school',
      align: 'left',
    },
    {
      title: 'Job',
      index: 'job',
      render: record => `My job is ${record.job}`,
    },
    {
      title: 'Skill',
      index: 'skill',
      align: 'center',
    },
    {
      title: 'Actions',
      style: { width: '80px' },
      render: record => (
        <div className="flex justify-center">
          <Button
            size="small"
            color="error"
            onClick={() => console.log(record)}
          >
            <Icon icon="trash" />
          </Button>
          <Button
            className="ml-2"
            size="small"
            color="primary"
            onClick={() => console.log(record)}
          >
            <Icon icon="edit" />
          </Button>
        </div>
      ),
    },
  ];

  state = {
    current: 1,
    pageSize: 10,
    total: 1001,
  };

  render() {
    return (
      <Grid col width="full">
        <Table
          columns={this.columns}
          data={data}
          bordered="horizontal"
          selectable
          vertical="middle"
        />
        <Grid row className="mt-2" justify="end">
          <Grid items="center">
            <Pagination.Total
              total={this.state.total}
              page={this.state.current}
              pageSize={this.state.pageSize}
            />
            <Pagination
              className="ml-1"
              total={this.state.total}
              current={this.state.current}
              pageSize={this.state.pageSize}
              max={9}
              onChange={(event, { page }) => this.setState({ current: page })}
            />
            <Pagination.Options
              className="ml-1"
              options={[10, 0, 30, 50]}
              value={this.state.pageSize}
              onChange={this.onChange}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Demo;
