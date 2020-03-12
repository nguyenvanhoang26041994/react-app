import React, { useState } from 'react';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Icon from '../../components/Icon';
import Pagination from '../../components/Pagination';
import Checkbox from '../../components/Checkbox';
import Switch from '../../components/Switch';
import Radio from '../../components/Radio';
import Progress from '../../components/Progress';
import PureConfirm from '../../components/PureConfirm';
import ProgressButton from '../../components/ProgressButton';
import DarkModeToggle from '../../components/DarkModeToggle';
import ScrollUp from '../../components/ScrollUp';
import PureNotification from '../../components/PureNotification';
import PureAlert from '../../components/PureAlert';
import Rating from '../../components/Rating';
import Slider from '../../components/Slider';
import Portal from '../../components/Portal';
import Pin from '../../components/Pin';
import Confirm from '../../components/Confirm';
import Notification from '../../components/Notification';
import Alert from '../../components/Alert';

require('./HomePage.scss');

const icons = [
  'bars',
  'bell',
  'chart',
  'check',
  'chevron-down',
  'cog',
  'copy',
  'dot-circle',
  'ellipsis-h',
  'globe',
  'heart',
  'home',
  'moon-stars',
  'plus',
  'search',
  'share',
  'sun',
  'chevron-circle-left',
];

const HomePage = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <div className="flex flex-wrap min-h-screen sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex">
      <DarkModeToggle />
      <ScrollUp />
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-col">
        <div className="mt-2 mb-10 flex items-end justify-start mx-2">
          <Progress percent={0.32} r={20} className="mr-2" />
          <Progress percent={0.69} className="mr-2" />
          <Progress percent={0.9} r={30} />
        </div>
        <div className="mb-10 flex justify-start mx-2">
          <Pagination total={500} pageSize={5} max={9} defaultCurrentPage={15} />
        </div>
        <div className="flex flex-col mb-10 mx-2">
          <PureConfirm header="Wellcome" className="w-full">
            Hello sweet, I just wanna say to you that you are so beautiful!
          </PureConfirm>
          <Confirm canOutsideClickClose open={confirmOpen} header="Wellcome" onClose={() => setConfirmOpen(false)}>
            Hello sweet, I just wanna say to you that you are so beautiful!
          </Confirm>
        </div>
        <div className="flex flex-col mb-10 mx-2">
          <PureAlert className="w-full mb-2">
            Normal message!
          </PureAlert>
          <PureAlert type="success" className="w-full mb-2">
            Success message!
          </PureAlert>
          <PureAlert type="error" className="w-full mb-2">
            Error message!
          </PureAlert>
          <PureAlert type="warning" className="w-full">
            Warning message!
          </PureAlert>
          <Alert type="success" open={alertOpen} onClose={() => setAlertOpen(false)} className="w-full mb-2">
            Success message!
          </Alert>
        </div>
        <div className="flex mb-10 mx-2">
          <PureNotification className="w-full">
            Hello sweet!
          </PureNotification>
          <Notification open={notificationOpen} onClose={() => setNotificationOpen(false)}>
            Hello sweet!
          </Notification>
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full xl:w-1/4">
        <div className="mt-2 mb-10 mx-2">
          <Textbox className="w-full mb-2" label="Textbox" placeholder="placeholder..." />
          <Textbox className="w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
          <Textarea className="w-full mb-2" label="Textarea" placeholder="placeholder..." />
          <Select className="w-full mb-2" defaultValue="option-2" label="Select Box">
            <Select.Option value="option-1">Option One</Select.Option>
            <Select.Option value="option-2">Option Two</Select.Option>
            <Select.Option value="option-3">Option Three</Select.Option>
            <Select.Option value="option-4">Option Four</Select.Option>
            <Select.Option value="option-5">Option Five</Select.Option>
          </Select>
        </div>
        <div className="flex flex-col mb-10 mx-2">
          <Rating defaultStar={3} className="mb-2" />
          <Rating defaultStar={4} max={10} className="mb-2" />
        </div>
        <div className="flex flex-wrap justify-start items-center mb-10 mx-2">
          <Radio name="same_name" className="mr-2" defaultChecked />
          <Checkbox className="mr-2" defaultChecked />
          <Switch className="mr-2" defaultChecked />
        </div>
        <div className="flex flex-wrap justify-start items-center mb-10 mx-2">
          <Button className="mr-2" onClick={() => setConfirmOpen(true)}>Confirm</Button>
          <Button className="mr-2" onClick={() => setNotificationOpen(true)}>Notification</Button>
          <Button onClick={() => setAlertOpen(true)}>Alert</Button>
        </div>
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-col">
        <div className="mx-2">
          {/* <DatePicker label="Date Picker" /> */}
        </div>
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-wrap self-start">
      </div>
    </div>
  );
};

export default HomePage;
