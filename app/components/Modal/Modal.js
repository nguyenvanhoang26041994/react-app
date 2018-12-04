import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { omit, isBoolean } from 'lodash/fp';

import Portal from '../Portal';
import PureModal from './PureModal';
import Button from '../Button';
import { canUseDOM } from '../utils';

// import '../style/utilities/flexbox';
// import '../style/utilities/spacing.css';
import './style/Modal.scss';

let nodeRender = null;
if (canUseDOM) {
  nodeRender = document.getElementsByTagName('body')[0]; // eslint-disable-line prefer-destructuring
}

class Modal extends React.PureComponent {
  isControlled = isBoolean(this.props.open);

  defaultOpenState = this.isControlled
    ? this.props.open
    : this.props.defaultOpen;

  state = {
    localOpen: this.defaultOpenState,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ localOpen: nextProps.open });
    }
  }

  unmountPortalCallback = () => {
    /**
     * Modal.confirm
     * Modal.delete
     * Modal.error
     * Modal.success
     * Modal.warning
     * Modal.infor
     * renderJSNode only for kind of Modal above
     */
    if (canUseDOM && this.props.renderJSNode) {
      try {
        document.body.removeChild(this.props.renderJSNode);
      } catch (e) {
        console.warn(e); //eslint-disable-line
      }
    }
  };

  handleLocalClose = () =>
    this.isControlled
      ? this.props.onClose()
      : this.setState({ localOpen: false });

  handleLocalOK = () => {
    const isOK = this.props.onOK();
    if (isOK) {
      return this.isControlled
        ? this.handleLocalClose()
        : this.setState({ localOpen: false });
    }
    return null;
  };

  handleLocalCancel = () => {
    const isCancel = this.props.onCancel();
    if (isCancel) {
      return this.isControlled
        ? this.handleLocalClose()
        : this.setState({ localOpen: false });
    }
    return null;
  };

  render() {
    if (!canUseDOM || !this.state.localOpen) {
      return null;
    }

    const isHasFooter = 'footer' in this.props;
    const {
      title,
      footer,
      onClose,
      onCancel,
      onOK,
      open,
      defaultOpen,
      cancelText,
      okText,
      propsCancel,
      propsOK,
      hideCancel,
      hideOK,
      children,
      ...otherProps
    } = this.props;

    const cnOK = propsOK.className;
    const otherPropsOK = omit('className')(propsOK);

    return (
      <Portal node={nodeRender} unmountCallback={this.unmountPortalCallback}>
        <div className="rc-wrapped-modal">
          <PureModal
            {...otherProps}
            title={title}
            onClose={onClose}
            footer={
              isHasFooter ? (
                footer
              ) : (
                <span className="flex justify-end">
                  {!hideCancel && (
                    <Button onClick={this.handleLocalCancel} {...propsCancel}>
                      {cancelText}
                    </Button>
                  )}
                  {!hideOK && (
                    <Button
                      className={cn('ml-2', cnOK)}
                      color="primary"
                      onClick={this.handleLocalOK}
                      {...otherPropsOK}
                    >
                      {okText}
                    </Button>
                  )}
                </span>
              )
            }
          >
            {children}
          </PureModal>
        </div>
      </Portal>
    );
  }
}

Modal.displayName = 'Modal';
Modal.propTypes = {
  defaultOpen: PropTypes.bool,
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  hideCancel: PropTypes.bool,
  hideOK: PropTypes.bool,
  onClose: PropTypes.func,
  onOK: PropTypes.func,
  onCancel: PropTypes.func,
  propsCancel: PropTypes.object,
  propsOK: PropTypes.object,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  renderJSNode: PropTypes.any,
};
Modal.defaultProps = {
  defaultOpen: true,
  cancelText: 'Cancel',
  okText: 'OK',
  propsCancel: {},
  propsOK: {},
  onClose: f => f,
  onOK: () => true,
  onCancel: () => true,
};

export default Modal;
