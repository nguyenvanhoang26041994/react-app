import React from 'react';
import { Select } from '../../../components/core';

export default () => (
  <React.Fragment>
    <Select placement="bottom-left" defaultValue="bottom-left">
      <Select.OptGroup label="Group 1">
        <Select.Option value="bottom">bottom</Select.Option>
        <Select.Option value="bottom-left">bottom-left</Select.Option>
        <Select.Option value="bottom-right">bottom-right</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="Group 2">
        <Select.Option value="4"> value 4</Select.Option>
        <Select.Option value="5"> value 5</Select.Option>
        <Select.Option value="6"> value 6</Select.Option>
      </Select.OptGroup>
    </Select>
    <Select className="ml-1" placement="bottom" defaultValue="bottom">
      <Select.OptGroup label="Group 1">
        <Select.Option value="bottom">bottom</Select.Option>
        <Select.Option value="bottom-left">bottom-left</Select.Option>
        <Select.Option value="bottom-right">bottom-right</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="Group 2">
        <Select.Option value="4"> value 4</Select.Option>
        <Select.Option value="5"> value 5</Select.Option>
        <Select.Option value="6"> value 6</Select.Option>
      </Select.OptGroup>
    </Select>
    <Select
      className="ml-1"
      placement="bottom-right"
      defaultValue="bottom-right"
    >
      <Select.OptGroup label="Group 1">
        <Select.Option value="bottom">bottom</Select.Option>
        <Select.Option value="bottom-left">bottom-left</Select.Option>
        <Select.Option value="bottom-right">bottom-right</Select.Option>
      </Select.OptGroup>
      <Select.OptGroup label="Group 2">
        <Select.Option value="4"> value 4</Select.Option>
        <Select.Option value="5"> value 5</Select.Option>
        <Select.Option value="6"> value 6</Select.Option>
      </Select.OptGroup>
    </Select>
  </React.Fragment>
);
