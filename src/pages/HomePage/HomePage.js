import React from 'react';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Icon from '../../components/Icon';
import Pagination from '../../components/Pagination';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import Progress from '../../components/Progress';

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
  <div className="flex flex-wrap min-h-screen sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex p-1">
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4">
      <div className="my-5 flex items-center">
        <Progress percent={0.69} className="mr-3" />
        <Progress percent={0.22} r={40} className="mr-3" />
      </div>
      <div className="my-5 flex">
        <Pagination total={144} pageSize={5} />
      </div>

    </div>
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-full xl:w-1/4 my-5">
      <Textbox className="w-full mb-2" label="Textbox" placeholder="placeholder..." />
      <Textbox className="w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
      <Select className="w-full mb-2" label="Select Box" />
      <Textarea className="w-full mb-2" label="Textarea" placeholder="placeholder..." />
      <div className="my-5 flex">
        <Radio name="same_name" className="mr-2" defaultChecked />
        <Checkbox className="mr-2" defaultChecked />
      </div>
      <div className="my-5 flex flex-wrap">
        <Button className="mr-3" circle><Icon name="globe" /></Button>
        <Button className="mr-3">Button</Button>
        <Button className="mr-3">Button<Icon name="globe" className="ml-2" /></Button>
      </div>
    </div>
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-col my-5">
      
    </div>
    <div className="w-full sm:w-full md:w-full lg:w-full xl:w-1/4 flex flex-wrap self-start my-5">
      {/* {icons.map((icon, idx) => (
        <Icon key={idx} name={icon} className="m-3" />
      ))} */}
    </div>
  </div>
);

export default HomePage;
