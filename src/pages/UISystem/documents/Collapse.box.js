import React from 'react';
import cn from 'classnames';

import { Collapse } from '../../../components/core';
import PracticeBox from '../../../components/PracticeBox';
import StepperBox from './Stepper.box';
import NotificationBox from './Notification.box';
import CarouselBox from './Carousel.box';

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} header="COLLAPSE">
      <Collapse defaultActiveKey={['key-2']} accordion>
        <Collapse.Panel key="key-1" header="Button Box Header">
         <CarouselBox hiddenHeader />
        </Collapse.Panel>
        <Collapse.Panel key="key-2" header="Delivery Process">
          <StepperBox hiddenHeader className="mt-2" />
        </Collapse.Panel>
        <Collapse.Panel key="key-3" header="Notification Box Header">
          <NotificationBox />
        </Collapse.Panel>
      </Collapse>
    </PracticeBox>
  );
};
