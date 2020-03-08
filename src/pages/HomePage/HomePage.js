import React from 'react';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Icon from '../../components/Icon';
import Pagination from '../../components/Pagination';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';

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
  <div className="flex min-h-screen p-5">
    <div className="w-1/5 p-2">
      <div className="mb-5 flex flex-wrap">
        <Checkbox className="mr-3" defaultChecked />
        <Checkbox className="mr-3" />
        <Checkbox className="mr-3" disabled />
        <Checkbox className="mr-3" defaultChecked disabled />
      </div>
      <div className="mb-5 flex flex-wrap">
        <Radio name="same_name" className="mr-3" defaultChecked />
        <Radio name="same_name" className="mr-3" />
        <Radio name="same_name2" className="mr-3" disabled />
        <Radio name="same_name2" className="mr-3" defaultChecked disabled />
      </div>
    </div>
    <div className="flex flex-col w-1/5 p-2">
      <Textbox className="w-full mb-2" placeholder="Textbox..." />
      <Textbox className="w-full mb-2" color="blue" placeholder="Password..." type="password" />
      <Select className="w-full mb-2" />
      <Textarea className="w-full mb-2" placeholder="Textarea..." />
      <Textbox className="w-full mb-2" label="Textbox" placeholder="placeholder..." />
      <Textbox className="w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
      <Select className="w-full mb-2" label="Select Box" />
      <Textarea className="w-full mb-2" label="Textarea" placeholder="placeholder..." />
      <div className="mt-5 flex flex-wrap">
        <Button className="mr-3" circle><Icon name="globe" /></Button>
        <Button className="mr-3">Button</Button>
        <Button className="mr-3">Button<Icon name="globe" className="ml-2" /></Button>
      </div>
    </div>
    <div className="w-2/5 flex flex-col p-2">
      <div className="mb-5 flex">
        <Pagination total={105} pageSize={7} defaultCurrentPage={3} />
      </div>
    </div>
    <div className="w-1/5 flex flex-wrap self-start p-2">
      {icons.map((icon, idx) => (
        <Icon key={idx} name={icon} className="m-3" />
      ))}
    </div>
  </div>
);

export default HomePage;
