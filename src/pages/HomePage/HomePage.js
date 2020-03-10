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
import Slider from '../../components/Slider';

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
      <div className="mt-2 mb-10 flex items-end justify-start">
        <Progress percent={0.32} r={20} className="mr-2" />
        <Progress percent={0.69} className="mr-2" />
        <Progress percent={0.9} r={35} />
      </div>
      <div className="mb-10 flex justify-start">
        <Pagination total={144} pageSize={5} />
      </div>
      <div className="flex mb-10">
        <PureConfirm header="Wellcome">
          Hello sweet, I just wanna say to you that you are so beautiful!
        </PureConfirm>
      </div>
      <div className="flex mb-10">
        <PureNotification>Hello sweet</PureNotification>
      </div>
      <div className="flex mb-10">
        {/* <Slider value={10} max={100} onChange={value => console.log(value)} style={{ width: '350px' }} /> */}
      </div>
    </div>
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full xl:w-1/4">
      <div className="mt-2 mb-10">
        <Textbox className="w-full mb-2" label="Textbox" placeholder="placeholder..." />
        <Textbox className="w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
        <Select className="w-full mb-2" label="Select Box" />
        <Textarea className="w-full mb-2" label="Textarea" placeholder="placeholder..." />
      </div>
      <div className="flex flex-col mb-10">
        <Rating defaultStar={3} className="mb-2" />
        <Rating defaultStar={4} max={10} className="mb-2" />
      </div>
      <div className="flex flex-wrap justify-start items-center mb-10">
        <Radio name="same_name" className="mr-2" />
        <Checkbox className="mr-2" defaultChecked />
        <Switch className="mr-2" defaultChecked />
        <Button className="mr-2" circle><Icon name="globe" /></Button>
        <ProgressButton className="mr-2" icon="heart" />
        <Button>Button</Button>
      </div>
    </div>
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-col">
      <div className="m-2">
        {/* <DatePicker label="Date Picker" /> */}
      </div>
    </div>
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-wrap self-start">
    </div>
  </div>
);

export default HomePage;
