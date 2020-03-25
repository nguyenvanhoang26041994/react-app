import React from 'react';
import ButtonBox from '../documents/Button.box';
import TextboxBox from '../documents/Textbox.box';
import TextareaBox from '../documents/Textarea.box';
import SelectBox from '../documents/Select.box';
import TableBox from '../documents/Table.box';
import CheckboxBox from '../documents/Checkbox.box';
import PaginationBox from '../documents/Pagination.box';
import RatingBox from '../documents/Rating.box';
import ProgressBox from '../documents/Progress.box';
import AvatarBox from '../documents/Avatar.box';
import TabsBox from '../documents/Tabs.box';
import TooltipBox from '../documents/Tooltip.box';
import ConfirmBox from '../documents/Confirm.box';
import NotificationBox from '../documents/Notification.box';
import AlertBox from '../documents/Alert.box';
import DrawerBox from '../documents/Drawer.box';
import CollapseBox from '../documents/Collapse.box';
import CarouselBox from '../documents/Carousel.box';
import StepperBox from '../documents/Stepper.box';
import TimelineBox from '../documents/Timeline.box';
import ChipBox from '../documents/Chip.box';
import ModalBox from '../documents/Modal.box';
import MenuBox from '../documents/Menu.box';
import BreadcrumbBox from '../documents/Breadcrumb.box';

export default () => {
  return (
    <div className="container mx-auto flex flex-col relative">
      <div className="flex mb-20 flex-wrap">
        <ButtonBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <PaginationBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <RatingBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
      </div>

      <div className="flex mb-20 flex-wrap">
        <TextboxBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <SelectBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <TextareaBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <CheckboxBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <TabsBox className="w-full sm:w-full md:w-:full lg:w-2/3 xl:w-2/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <TimelineBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <TableBox className="w-full sm:w-full md:w-:full lg:w-2/3 xl:w-2/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <ProgressBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <StepperBox className="w-full sm:w-full md:w-:full lg:w-2/3 xl:w-2/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <DrawerBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <CollapseBox className="w-full sm:w-full md:w-:full lg:w-2/3 xl:w-2/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <BreadcrumbBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <TooltipBox className="w-full sm:w-full md:w-:full lg:w-2/3 xl:w-2/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <ConfirmBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <AlertBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <NotificationBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <ModalBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <AvatarBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <ChipBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
      </div>
      <div className="flex mb-20 flex-wrap">
        <MenuBox className="w-full sm:w-full md:w-:full lg:w-1/3 xl:w-1/3 mb-10" />
        <CarouselBox className="w-full sm:w-full md:w-:full lg:w-2/3 xl:w-2/3 mb-10" />
      </div>
    </div>
  );
}
