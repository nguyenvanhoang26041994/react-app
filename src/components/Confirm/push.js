import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Confirm from './Confirm';

const PusherConfirm = ({ temporary, ...otherProps }) => {
  const [open, setIsOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        ReactDOM.unmountComponentAtNode(temporary);
        document.body.removeChild(temporary);
      }, 500);

      return () => clearTimeout(timer);
    }
  } ,[open]);

  return (
    <Confirm
      {...otherProps}
      open={open}
      onClose={() => setIsOpen(false)}
    />
  );
};

export default (data) => {
  const temporary = document.createElement('div');
  document.body.appendChild(temporary);

  ReactDOM.render(<PusherConfirm {...data} temporary={temporary} />, temporary);
};
