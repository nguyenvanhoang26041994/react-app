import React from 'react';
import cn from 'classnames';
import { Carousel } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} header="CAROUSEL">
      <Carousel>

      </Carousel>
    </PracticeBox>
  );
};
