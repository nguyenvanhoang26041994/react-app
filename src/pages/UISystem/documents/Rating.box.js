import React, { useState } from 'react';
import cn from 'classnames';
import { Rating } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} header="RATING">
      <Rating defaultStar={3} max={10} className="mb-2" />
    </PracticeBox>
  );
};
