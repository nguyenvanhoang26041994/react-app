import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { Select } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  const [value, setValue] = useState('second-option');
  const ref = useRef();

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
          className="mb-2"
          defaultValue="third-option"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
        <Select
          placeholder="--Select Controlled placeholder--"
          name="select_name"
          selectRef={ref}
          value={value}
          onChange={val => setValue(val)}
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
