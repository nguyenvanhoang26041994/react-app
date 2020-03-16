import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Notification from './Notification';

const AdvandeNotification = ({ temporary, ...otherProps }) => {
  const [open, setIsOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      ReactDOM.unmountComponentAtNode(temporary);
      document.body.removeChild(temporary);
    }
  } ,[open]);

  return (
    <Notification
      {...otherProps}
      open={open}
      onClose={() => setIsOpen(false)}
    />
  );
};

export default (data) => {
  const temporary = document.createElement('div');
  document.body.appendChild(temporary);

  ReactDOM.render(<AdvandeNotification {...data} temporary={temporary} />, temporary);
};
