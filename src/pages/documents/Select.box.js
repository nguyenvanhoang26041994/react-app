import React from 'react';
import cn from 'classnames';
import { Select } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="SELECT" wrapperClassName="mb-2">
        <Select
          label="Select Label"
          placeholder="--Select placeholder--"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Select
          placeholder="--Select placeholder--"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
      </PracticeBox>
      <PracticeBox className="flex flex-col" wrapperClassName="mb-2">
        <Select
          className="mb-2"
          error="Select error"
          label="Select Label"
          placeholder="--Select placeholder--"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
        <Select
          error="Select error"
          placeholder="--Select placeholder--"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
      </PracticeBox>
    </div>
  );
};
