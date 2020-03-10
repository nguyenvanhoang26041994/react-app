import React from 'react';
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
import Rating from '../../components/Rating';

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

const HomePage = () => (
  <div className="flex flex-wrap min-h-screen sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex">
    <DarkModeToggle />
    <ScrollUp />
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-col items-center">
      <div className="m-2 flex items-end justify-start">
        <Progress percent={0.32} r={20} className="mr-2" />
        <Progress percent={0.69} className="mr-2" />
        <Progress percent={0.22} r={35} />
      </div>
      <div className="my-2 flex justify-start ml-2">
        <Pagination total={144} pageSize={5} />
      </div>
      <div className="flex m-2">
        <PureConfirm header="Wellcome">
          Hello sweet, I just wanna say to you that you are so beautiful!
        </PureConfirm>
      </div>
      <div className="flex m-2">
        <PureNotification>Hello sweet</PureNotification>
      </div>
      <div className="flex m-2">
        <Rating />
      </div>
    </div>
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full xl:w-1/4">
      <div className="m-2">
        <Textbox className="w-full mb-2" label="Textbox" placeholder="placeholder..." />
        <Textbox className="w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
        <Select className="w-full mb-2" label="Select Box" />
        <Textarea className="w-full mb-2" label="Textarea" placeholder="placeholder..." />
        <div className="flex flex-wrap justify-end items-center">
          <Radio name="same_name" className="mr-2" />
          <Checkbox className="mr-2" defaultChecked />
          <Switch className="mr-2" defaultChecked />
          <Button className="mr-2" circle><Icon name="globe" /></Button>
          <ProgressButton className="mr-2" icon="heart" />
          <Button>Button</Button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-col">

    </div>
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-wrap self-start">
    </div>
  </div>
);

export default HomePage;
