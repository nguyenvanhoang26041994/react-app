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

export default () => {
  return (
    <div className="container mx-auto flex">
      <div className="w-1/3 px-5">
        <ButtonBox className="mb-20" />
        <TextboxBox className="mb-20" />
        <TextareaBox className="mb-20" />
        <SelectBox className="mb-20" />
        <ConfirmBox className="mb-20" />
        <NotificationBox className="mb-20" />
        <AlertBox className="mb-20" />
        <DrawerBox className="mb-20" />
      </div>
      <div className="w-2/3 px-5">
        <TableBox className="w-full mb-20" />
        <div className="flex w-full mb-20">
          <div className="w-1/2">
            <CheckboxBox className="mb-10" />
            <AvatarBox />
          </div>
          <div className="w-1/2">
            <PaginationBox className="mb-10"/>
            <RatingBox />
          </div>
        </div>

        <ProgressBox className="mb-20" />
        <TabsBox className="mb-20" />
        <CollapseBox className="mb-20" />
        <TooltipBox className="mb-20" />
      </div>
    </div>
  );
};
