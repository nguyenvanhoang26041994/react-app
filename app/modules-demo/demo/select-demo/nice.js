import React from 'react';
import { Select } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Select onChange={e => console.log(e.target.value)} />
    <Select className="ml-1" onChange={e => console.log(e.target.value)}>
      <Select.Option value="1"> value 1</Select.Option>
      <Select.Option value="2"> value 2</Select.Option>
      <Select.Option value="3"> value 3</Select.Option>
    </Select>
    <Select className="ml-1" onChange={e => console.log(e.target.value)}>
      <Select.OptGroup label="Group 1">
        <Select.Option value="1"> value 1</Select.Option>
        <Select.Option value="2"> value 2</Select.Option>
        <Select.Option value="3"> value 3</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="Group 2">
        <Select.Option value="4"> value 4</Select.Option>
        <Select.Option value="5"> value 5</Select.Option>
        <Select.Option value="6"> value 6</Select.Option>
      </Select.OptGroup>
    </Select>
  </React.Fragment>
);
