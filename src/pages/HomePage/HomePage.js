import React from 'react';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Icon from '../../components/Icon';
import Pagination from '../../components/Pagination';

require('./HomePage.scss');

const HomePage = () => (
  <div className="flex min-h-screen p-3">
    <div className="w-1/5">
      <div className="mb-5 flex">
        <Button className="mr-2" style={{ padding: 0 }}><Icon name="globe" /></Button>
        <Button className="mr-2">Button</Button>
      </div>
    </div>
    <div className="flex flex-col w-1/5">
      <Textbox className="mr-3 w-full mb-2" label="Textbox" placeholder="placeholder..." />
      <Textbox className="mr-3 w-full mb-2" label="Password" color="blue" placeholder="placeholder..." type="password" />
      <Textarea className="mr-3 w-full mb-2" label="Textarea" placeholder="placeholder..." />
      <Select className="mr-3 w-full mb-2" label="Select Box" />
    </div>
    <div className="w-1/5">
      {/* <Pagination total={100} pageSize={10} /> */}
    </div>
  </div>
);

export default HomePage;
