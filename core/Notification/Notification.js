import React, { useCallback, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Dialog from '../Dialog';
import { leftNode, rightNode, middleNode } from '../Portal/register';
import useUniqueId from '../../hooks/useUniqueId';

const mapDefaultNode = {
  left: leftNode,
  right: rightNode,
  middle: middleNode,
};

const notificationRef = {
  maxNoti: 3,
  defaultNode: leftNode,
  update: ({ maxNoti, defaultNode }) => {
    notificationRef.maxNoti = maxNoti || notificationRef.maxNoti;
    notificationRef.defaultNode = mapDefaultNode[defaultNode] || notificationRef.defaultNode;
  },
  instances: new Map(),
  keepMaxNoti: () => {
    if (notificationRef.instances.size > notificationRef.maxNoti - 1) {
      let counter = 0;
      const willClose = [];
      for (const [key, { doClose }] of notificationRef.instances) {
        if (counter <= notificationRef.instances.size - notificationRef.maxNoti) {
          willClose.push({
            key,
            doClose,
          });
        }
        counter++;
      }
      willClose.forEach(({ doClose }) => doClose());
    }
  },
};
window.notificationRef = notificationRef;
const Notification = ({
  className,
  ...otherProps
}) => {
  return (
      <Dialog
        className={cn('fnotification', className)}
        {...otherProps}
      />
  );
};

const PusherNotification = ({ renderFunc, autoClose, ...otherProps }) => {
  const uniqueId = useUniqueId();
  const [isOpen, setIsOpen] = useState(true);
  const doClose = useCallback(() => {
    setIsOpen(false);
    notificationRef.instances.delete(uniqueId);
  }, [setIsOpen, uniqueId]);

  useEffect(() => {
    if (autoClose) {
      const timmer = setTimeout(() => doClose(), autoClose);
      return () => clearTimeout(timmer);
    }
  }, [autoClose, doClose]);

  useEffect(() => {
    if (isOpen) {
      notificationRef.instances.set(uniqueId, {
        doClose,
      });
    } else {
      notificationRef.instances.delete(uniqueId);
    }
    return () => notificationRef.instances.delete(uniqueId);
  }, [uniqueId, isOpen, doClose]);

  if (isOpen) {
    return (
      <Portal {...otherProps} node={notificationRef.defaultNode}>
        {renderFunc({ doClose })}
      </Portal>
    );
  }
  return null;
};

Notification.push = (renderFunc, props) => {
  notificationRef.keepMaxNoti();
  const node = window.document.createElement('div');

  ReactDOM.render((
    <PusherNotification
      renderFunc={renderFunc}
      renderNode={node}
      {...props}
    />
  ), node);
};

Notification.updateConfig = notificationRef.update;
Notification.Header = Dialog.Header;
Notification.Body = Dialog.Body;
Notification.Header = Dialog.Header;
Notification.Closer = Dialog.Closer;

Notification.displayName = 'Notification';
Notification.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};
Notification.defaultProps = {
};

export default Notification;
