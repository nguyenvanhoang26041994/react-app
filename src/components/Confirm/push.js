import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

import Confirm from './Confirm';

const PusherConfirm = ({ temporary, ...otherProps }) => {
  const [open, setIsOpen] = useState(true);
  const onClose = useCallback(() => setIsOpen(false), []);


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
      onClose={onClose}
    />
  );
};

export default (data) => {
  const temporary = document.createElement('div');
  document.body.appendChild(temporary);

  ReactDOM.render(<PusherConfirm {...data} temporary={temporary} />, temporary);
};
