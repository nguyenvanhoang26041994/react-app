import React from 'react';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import Switch from '../../components/Switch';

const CommonDocumentPage = ({ children }) => {
  return (
    <div id="common-document-page" className="flex mt-20">
      <div className="w-1/3 px-3"></div>
      <div className="w-1/3 px-3">
        <h2 className="mb-3">BUTTON</h2>
        <div className="flex">
          <Button className="mr-2">Basic</Button>
          <Button disabled className="mr-2">Disabled</Button>
          <Button circle className="mr-2"><Icon name="home" /></Button>
        </div>
        <h2 className="mb-3 mt-20">SWITCH</h2>
        <div className="flex">
          <Switch defaultChecked className="mr-2" />
          <Switch className="mr-2" />
          <Switch defaultChecked className="mr-2" disabled />
          <Switch className="mr-2" disabled />
        </div>
        <h2 className="mb-3 mt-20">CHECKBOX</h2>
        <div className="flex">
          <Checkbox defaultChecked className="mr-2" />
          <Checkbox className="mr-2" />
          <Checkbox defaultChecked className="mr-2" disabled />
          <Checkbox className="mr-2" disabled />
        </div>
        <h2 className="mb-3 mt-20">RADIO</h2>
        <div className="flex">
          <Radio defaultChecked className="mr-2" name="n_1" />
          <Radio className="mr-2" name="n_1" />
          <Radio defaultChecked className="mr-2" disabled name="n_2" />
          <Radio className="mr-2" disabled name="n_2" />
        </div>
      </div>
    </div>
  )
};

export default CommonDocumentPage;
