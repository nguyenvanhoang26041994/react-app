import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { Select } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <PracticeBox className="flex flex-col" header="SELECT">
        <Select
          className="mb-2"
          label="Select Label"
          placeholder="--Select placeholder--"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
        <Select
          placeholder="--Select placeholder--"
          className="mb-2"
          defaultValue="third-option"
        >
          <Select.Option value="first-option">First Option</Select.Option>
          <Select.Option value="second-option">Second Option</Select.Option>
          <Select.Option value="third-option">Third Option</Select.Option>
        </Select>
      </PracticeBox>
    </div>
  );
};
