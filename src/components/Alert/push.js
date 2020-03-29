import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Alert from './Alert';

const PusherAlert = ({ temporary, children, render, ...otherProps }) => {
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
    <Alert
      {...otherProps}
      open={open}
      onClose={() => setIsOpen(false)}
    >
      {children || render(setIsOpen)}
    </Alert>
  );
};

PusherAlert.propTypes = {
  temporary: PropTypes.any.isRequired,
  children: PropTypes.any,
  render: PropTypes.func,
};
PusherAlert.defaultProps = {
  render: f => f,
};

export default (data) => {
  const temporary = document.createElement('div');
  document.body.appendChild(temporary);

  ReactDOM.render(<PusherAlert {...data} temporary={temporary} />, temporary);
};
