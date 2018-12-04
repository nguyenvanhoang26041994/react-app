/* eslint-disable consistent-return */
import React from 'react';
import cn from 'classnames';
import { omit } from 'lodash/fp';
import ReactDOM from 'react-dom';

import { canUseDOM } from '../utils';
import Modal from './Modal';
import Icon from '../Icon';
import './style/Modal.anywhere.scss';

export const icons = Object.freeze({
  confirm: 'question',
  success: 'check',
  info: 'info',
  warning: 'exclamation',
  error: 'times',
  delete: 'trash',
});

export const types = props => ({
  confirm: {},
  delete: {
    okText: props.okText || 'Yes',
    cancelText: props.cancelText || 'No',
    propsOK: { color: 'error', ...props.propsOK },
  },
  info: {},
  success: {
    hideCancel: true,
    propsOK: { color: 'success', ...props.propsOK },
  },
  warning: {
    hideCancel: true,
    propsOK: { color: 'warning', ...props.propsOK },
  },
  error: {
    hideCancel: true,
    propsOK: { color: 'error', ...props.propsOK },
  },
});

export default type => props => {
  if (!canUseDOM) {
    return null;
  }

  const defaultNode = document.createElement('div');

  // flag for Modal.clean(type);
  defaultNode.className = 'flag__rc-modal-confirm';
  document.body.appendChild(defaultNode);

  const {
    className,
    message,
    description,
    children,
    title,
    isHideIcon,
    ...otherProps
  } = omit([
    'children',
    'title',
    'hideCancel',
    'okText',
    'cancelText',
    'propsOK',
  ])(props);

  ReactDOM.render(
    <Modal
      {...otherProps}
      defaultOpen
      className={cn(className, 'rc-modal-confirm-override')}
      renderJSNode={defaultNode}
      {...types(props)[type]}
    >
      <div className="rc-modal-confirm">
        {!isHideIcon && (
          <Icon
            className={`rc-modal-confirm__icon rc-modal-confirm__icon--${type}`}
            icon={icons[type]}
          />
        )}
        <span className="rc-modal-confirm__message">{message}</span>
        <span className="rc-modal-confirm__description">{description}</span>
      </div>
    </Modal>,
    defaultNode,
  );
};
