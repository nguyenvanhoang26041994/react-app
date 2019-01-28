import React from 'react';
import Input from './Input.Native';
import Textbox from './Textbox';

export const types = Object.freeze({
  text: Textbox,
});

export default ({ htmlType, ...otherProps }) =>
  React.createElement(types[htmlType], { ...otherProps });
