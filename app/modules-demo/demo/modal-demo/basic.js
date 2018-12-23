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
      <div className="flex flex-col">
        <Switch onChange={this.onChange} checked={this.state.open} />
        {this.state.open && (
          <Modal title="Modal Title">
            <p style={{ color: 'purple' }}>
              This Modal is uncontrolled component
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
            <p>
              This is the content in Modal and this one is very very long text
            </p>
          </Modal>
        )}
      </div>
    );
  }
}
