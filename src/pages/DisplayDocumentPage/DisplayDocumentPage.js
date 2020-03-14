import React from 'react';

import Rating from '../../components/Rating';
import Progress from '../../components/Progress';
import Avatar from '../../components/Avatar';
import Radio from '../../components/Radio';
import Switch from '../../components/Switch';

const avatarLink = 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p320x320/83290506_984513715279336_4057640429858848768_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=RBZa-mAgWzkAX9PXXVp&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=1bbbfc45c4eef77cad5eee9361ded2db&oe=5E926A7C';

const DisplayDocumentPage = ({ children }) => {
  return (
    <div id="display-document-page" className="flex mt-20">
      <div className="w-1/4 px-3">
        <h2 className="text-lg mb-3">AVATAR</h2>
        <div className="flex items-center">
          <Avatar className="mr-3" src={avatarLink} name="Hoang"/>
          <Avatar className="mr-3 text-xl" src={avatarLink} name="Hoang"/>
          <Avatar className="mr-3" style={{ fontSize: '2em' }} src={avatarLink} name="Hoang"/>
        </div>
        <h2 className="text-lg mb-3 mt-10">AVATAR SQUARE</h2>
        <div className="flex items-center">
          <Avatar  className="mr-3" shape="square" src={avatarLink} name="Hoang"/>
          <Avatar  className="mr-3 text-xl" shape="square" src={avatarLink} name="Hoang"/>
          <Avatar className="mr-3" style={{ fontSize: '2em' }} shape="square" src={avatarLink} name="Hoang"/>
        </div>
      </div>
      <div className="w-1/4 px-3">
        <h2 className="mb-3">RATING</h2>
        <Rating defaultStar={3} className="mb-2" />
        <Rating defaultStar={3} className="mb-2 text-xl" />
        <h2 className="mb-3 mt-10">RATING 10 STAR</h2>
        <Rating defaultStar={5} max={10} className="mb-2" />
        <Rating defaultStar={5} max={10} className="mb-2 text-xl" />
      </div>
      <div className="w-1/4 px-3">
        <h2 className="mb-3">PROGRESS</h2>
        <Progress percent={0.45} className="mr-5" />
        <h2 className="mb-3 mt-10">PROGRESS WITH CUSTOM RADIUS</h2>
        <Progress percent={0.45} r={40} className="mr-5" />
      </div>
    </div>
  )
};

export default DisplayDocumentPage;
