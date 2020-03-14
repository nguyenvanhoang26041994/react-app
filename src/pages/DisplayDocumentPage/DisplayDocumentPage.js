import React from 'react';

import Progress from '../../components/Progress';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Switch from '../../components/Switch';

const avatarLink = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C';

const DisplayDocumentPage = ({ children }) => {
  return (
    <div id="display-document-page" className="flex">
      <div className="w-1/3 px-3">
      </div>
      <div className="w-1/3 px-3">
        <div className="flex items-center">
          <Progress percent={0.45} className="mr-5" />
          <Progress percent={0.45} r={40} className="mr-5" />
        </div>
      </div>
    </div>
  )
};

export default DisplayDocumentPage;
