import React from 'react';
import cn from 'classnames';
import { Breadcrumb, Icon } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="BREADCRUM">
      <Breadcrumb>
        <Breadcrumb.Item><Icon name="home" /></Breadcrumb.Item>
        <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
    </PracticeBox>
  );
};
