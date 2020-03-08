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

const HomePage = () => (
  <div className="flex min-h-screen p-5">
    <div className="w-1/5 p-2">
      <div className="mb-5 flex">
        <Button className="mr-2" style={{ padding: 0 }}><Icon name="globe" /></Button>
        <Button className="mr-2">Button</Button>
      </div>
    </div>
    <div className="flex flex-col w-1/5 p-2">
      <Textbox className="w-full mb-2" label="Textbox" placeholder="placeholder..." />
      <Textbox className="w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
      <Select className="w-full mb-2" label="Select Box" />
      <Textarea className="w-full mb-2" label="Textarea" placeholder="placeholder..." />
    </div>
    <div className="w-1/5 flex p-2">
      <Checkbox className="mr-3" defaultChecked />
      <Checkbox className="mr-3" />
      <Radio name="same_name" className="mr-2" defaultChecked />
      <Radio name="same_name" className="mr-2" />
    </div>
  </div>
);

export default HomePage;
