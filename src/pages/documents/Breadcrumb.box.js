import React from 'react';
import cn from 'classnames';
import { Breadcrumb } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="BREADCRUM">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Components</Breadcrumb.Item>
        <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
    </PracticeBox>
  );
};
