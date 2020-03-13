import React from 'react';

import Rating from '../../components/Rating';
import Progress from '../../components/Progress';
import Avatar from '../../components/Avatar';
import Radio from '../../components/Radio';
import Switch from '../../components/Switch';

const DisplayDocumentPage = ({ children }) => {
  return (
    <div id="display-document-page" className="flex mt-20">
      <div className="w-1/4 px-3">
        <h2>AVATAR</h2>
        <Avatar src="" name="Hoang"/>
      </div>
      <div className="w-1/4 px-3">
        <h2 className="mb-3">RATING</h2>
        <Rating defaultStar={3} className="mb-2" />
        <h2 className="mb-3 mt-10">RATING 10 STAR</h2>
        <Rating defaultStar={5} max={10} className="mb-2" />
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
