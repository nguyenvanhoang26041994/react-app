import React from 'react';
import { Avatar, Icon } from '../../components/core';

class Demo extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="flex mb-8 items-center">
          <Avatar
            name="Hoang"
            shape="circle"
            src="https://cdn.vox-cdn.com/thumbor/cScvZWobcTDavyWhISwPj7kYdcA=/0x0:1215x717/1200x800/filters:focal(698x78:892x272)/cdn.vox-cdn.com/uploads/chorus_image/image/56092265/Nasus.0.jpg"
          />
          <Avatar className="ml-1" name="Minh" shape="square" />
          <Avatar size="small" className="ml-1" name="Minh" shape="square" />
          <Avatar size="large" className="ml-1" name="Minh" shape="square" />
          <Avatar
            color="dodgerblue"
            icon={<Icon icon="user" />}
            size="large"
            className="ml-1"
            name="Minh"
          />
        </div>
      </div>
    );
  }
}

export default Demo;
