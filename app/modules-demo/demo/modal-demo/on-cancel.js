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
        <Modal
          open={this.state.open}
          title="Modal Title"
          onClose={() => this.setState({ open: false })}
          onCancel={() => {
            const isValid = window.confirm(
              'if onCancel return true, onClose will excuted, it good for validattion form',
            );

            if (!isValid) {
              return false;
            }

            // excute any function here
            return true;
          }}
        >
          <p>This Modal is controlled component.</p>
        </Modal>
      </div>
    );
  }
}
