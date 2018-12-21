import React from 'react';
import { Modal, Switch, Icon } from '../../../components/core';

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
          propsOK={{ color: 'success' }}
          propsCancel={{ color: 'error' }}
          cancelText={<Icon icon="trash" />}
          okText={
            <React.Fragment>
              <Icon icon="thumbs-up" />
              <span>DONE</span>
            </React.Fragment>
          }
        >
          <p>This Modal is controlled component.</p>
        </Modal>
      </div>
    );
  }
}
