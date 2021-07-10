import React, { useCallback, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Portal from '../Portal';
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
  closeAll: () => {
    const willClose = [];
    for (const [key, { doClose }] of notificationRef.instances) {
      willClose.push({
        key,
        doClose,
      });
    }
    willClose.forEach(({ doClose }) => doClose());
  },
};

const PusherNotification = ({ renderFunc, autoClose, onUnmounted, ...otherProps }) => {
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

  useEffect(() => {
    if (!isOpen && onUnmounted) {
      onUnmounted();
    }
  }, [isOpen, onUnmounted]);

  if (isOpen) {
    return (
      <Portal {...otherProps} node={notificationRef.defaultNode}>
        {renderFunc({ doClose })}
      </Portal>
    );
  }
  return null;
};

PusherNotification.propTypes = {
  renderFunc: PropTypes.func.isRequired,
  autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onUnmounted: PropTypes.func,
};
PusherNotification.defaultProps = {
  autoClose: false,
  onUnmounted: f => f,
};

notificationRef.push = (renderFunc, props) => {
  notificationRef.keepMaxNoti();
  const node = window.document.createElement('div');
  const onUnmounted = () => ReactDOM.unmountComponentAtNode(node);

  ReactDOM.render((
    <PusherNotification
      renderFunc={renderFunc}
      onUnmounted={onUnmounted}
      {...props}
    />
  ), node);
};

export { notificationRef };
export default PusherNotification;
