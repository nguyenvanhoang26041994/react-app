import React from 'react';
import { Modal, Switch } from '../../../components/core';

export default class Demo extends React.Component {
  state = { open: false };

  shouldComponentUpdate() {
    return true;
  }

  onChange = e => this.setState({ open: e.target.checked });

  render() {
    return (
      <Modal.Pure title="Modal Title">
        <p style={{ color: 'purple' }}>This Modal is uncontrolled component</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
        <p>This is the content in Modal and this one is very very long text</p>
      </Modal.Pure>
    );
  }
}
