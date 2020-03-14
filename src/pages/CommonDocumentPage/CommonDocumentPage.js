import React from 'react';

import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import Switch from '../../components/Switch';
import Rating from '../../components/Rating';
import Pagination from '../../components/Pagination';

const CommonDocumentPage = ({ children }) => {
  return (
    <div id="common-document-page" className="flex">
      <div className="w-1/3 px-3">
        <Rating defaultStar={3} />
        <Rating defaultStar={7} max={10} className="mb-10" />
        <Pagination total={500} pageSize={10} max={10} />
      </div>
      <div className="w-1/3 px-3">
        <div className="flex mb-10">
          <Button className="mr-2">Basic</Button>
          <Button disabled className="mr-2">Disabled</Button>
          <Button circle className="mr-2"><Icon name="home" /></Button>
        </div>
        <div className="flex mb-3">
          <Switch defaultChecked className="mr-2" />
          <Switch className="mr-2" />
          <Switch defaultChecked className="mr-2" disabled />
          <Switch className="mr-2" disabled />
        </div>
        <div className="flex mb-3">
          <Checkbox defaultChecked className="mr-2" />
          <Checkbox className="mr-2" />
          <Checkbox defaultChecked className="mr-2" disabled />
          <Checkbox className="mr-2" disabled />
        </div>
        <div className="flex mb-3">
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
