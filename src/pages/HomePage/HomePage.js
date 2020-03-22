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
import DropdownAndMenuBox from '../documents/DropdownAndMenu.box';
import BreadcrumbBox from '../documents/Breadcrumb.box';

export default () => {
  return (
    <div className="container mx-auto flex flex-col relative">
      <div className="flex mb-20">
        <ButtonBox className="w-1/3" />
        <PaginationBox className="w-1/3" />
        <RatingBox className="w-1/3" />
      </div>

      <div className="flex mb-20">
        <TextboxBox className="w-1/3" />
        <SelectBox className="w-1/3" />
        <TextareaBox className="w-1/3" />
      </div>
      <div className="flex mb-20">
        <CheckboxBox className="w-1/3" />
        <TabsBox className="w-2/3" />
      </div>
      <div className="flex mb-20">
        <TimelineBox className="w-1/3" />
        <TableBox className="w-2/3" />
      </div>
      <div className="flex mb-20">
        <ProgressBox className="w-1/3" />
        <StepperBox className="w-2/3" />
      </div>
      <div className="flex mb-20">
        <DrawerBox className="w-1/3" />
        <CollapseBox className="w-2/3" />
      </div>
      <div className="flex mb-20">
        <BreadcrumbBox className="w-1/3" />
        <TooltipBox className="w-2/3" />
      </div>
      <div className="flex mb-20">
        <ConfirmBox className="w-1/3" />
        <AlertBox className="w-1/3" />
        <NotificationBox className="w-1/3" />
      </div>
      <div className="flex mb-20">
        <ModalBox className="w-1/3" />
        <AvatarBox className="w-1/3" />
        <ChipBox className="w-1/3" />
      </div>
      <div className="flex mb-20">
        <CarouselBox className="w-2/3" />
      </div>
    </div>
  );
}
