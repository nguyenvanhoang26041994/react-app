/* eslint-disable no-console, no-alert */
import React from 'react';
import { Modal, Button, Text, Switch } from '../../components/core';

class Demo extends React.Component {
  state = {
    open: false,
    openOK: false,
    openCancel: false,
    defaultOpen: false,
  };

  handleOpenModal = () => this.setState({ open: true });

  handleCloseModal = () => this.setState({ open: false });

  handleOpenModalOK = () => this.setState({ openOK: true });

  handleCloseModalOK = () => this.setState({ openOK: false });

  handleOpenModalCancel = () => this.setState({ openCancel: true });

  handleCloseModalCancel = () => this.setState({ openCancel: false });

  render() {
    return (
      <div>
        <div className="mb-5">
          <Switch
            className="mb-1"
            checked={this.state.open}
            onChange={event => this.setState({ open: event.target.checked })}
          />
          <Switch
            className="mb-1 ml-1"
            checked={this.state.openOK}
            onChange={event => this.setState({ openOK: event.target.checked })}
          />
          <Switch
            className="mb-1 ml-1"
            checked={this.state.openCancel}
            onChange={event =>
              this.setState({ openCancel: event.target.checked })
            }
          />
          <Switch
            className="mb-1 ml-1"
            checked={this.state.defaultOpen}
            onChange={event =>
              this.setState({ defaultOpen: event.target.checked })
            }
          />
        </div>
        <div className="flex mb-5">
          <Button
            className="mb-1"
            color="primary"
            onClick={this.handleOpenModal}
          >
            Basic Modal
          </Button>
          <Button
            className="mb-1 ml-1"
            color="primary"
            onClick={this.handleOpenModalOK}
          >
            Modal with onOK
          </Button>
          <Button
            className="mb-1 ml-1"
            color="primary"
            onClick={this.handleOpenModalCancel}
          >
            Modal with onCancel
          </Button>
        </div>
        <div className="flex mb-5">
          <Button
            className="mb-1"
            onClick={() =>
              Modal.confirm({
                message: 'Confirm message',
                description: 'Confirm description',
              })
            }
          >
            Modal.confirm
          </Button>
          <Button
            className="mb-1 ml-1"
            onClick={() =>
              Modal.delete({
                message: 'Delete message',
                description: 'Delete description',
              })
            }
          >
            Modal.delete
          </Button>
          <Button
            className="mb-1 ml-1"
            onClick={() =>
              Modal.info({
                message: 'Info message',
                description: 'Info description',
              })
            }
          >
            Modal.info
          </Button>
          <Button
            className="mb-1 ml-1"
            onClick={() =>
              Modal.success({
                message: 'Success message',
                description: 'Success description',
              })
            }
          >
            Modal.success
          </Button>
          <Button
            className="mb-1 ml-1"
            onClick={() =>
              Modal.error({
                message: 'Error message',
                description: 'Error description',
              })
            }
          >
            Modal.error
          </Button>
          <Button
            className="mb-1 ml-1"
            onClick={() =>
              Modal.warning({
                message: 'Warning message',
                description: 'Warning description',
              })
            }
          >
            Modal.warning
          </Button>
        </div>
        <div className="mb-5">
          <Modal.Pure title="This is a title">
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
            <Text.P>This is Pure Modal, use by Modal.Pure</Text.P>
            <Text.P>Modal.Pure do not have the Cancel or OK button</Text.P>
            <Text.P>You and adding the footer by props.footer</Text.P>
          </Modal.Pure>
        </div>
        <Modal
          title="This is a title"
          open={this.state.open}
          onClose={this.handleCloseModal}
        >
          <Text.P>Basic Modal</Text.P>
          <Text.Field required>required</Text.Field>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
          <Text.P>Basic Modal</Text.P>
        </Modal>
        <Modal
          title="This is a title"
          open={this.state.openOK}
          onClose={this.handleCloseModalOK}
          onOK={() => {
            const confirmation = window.confirm(
              'click OK to close modal(onOK return true)!',
            );
            return confirmation;
          }}
        >
          <Text.P>This is the children</Text.P>
        </Modal>
        <Modal
          title="This is a title"
          open={this.state.openCancel}
          onClose={this.handleCloseModalCancel}
          onCancel={() => {
            const confirmation = window.confirm(
              'click Cancel to close modal(onCancel return true)!',
            );
            return confirmation;
          }}
        >
          <Text.P>This is the children</Text.P>
        </Modal>
        {this.state.defaultOpen && (
          <Modal title="This is a title">
            <Text.P>This is the children</Text.P>
          </Modal>
        )}
      </div>
    );
  }
}

export default Demo;
