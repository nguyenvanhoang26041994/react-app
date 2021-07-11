import React, { useCallback, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import { bottomLeftNode, bottomRightNode, topLeftNode, topRightNode } from '../Portal/register';
import useUniqueId from '../../hooks/useUniqueId';

const mapDefaultNode = {
  'bottom-left': bottomLeftNode,
  'bottom-right': bottomRightNode,
  'top-left': topLeftNode,
  'top-right': topRightNode,
};

const notificationRef = {
  maxNoti: 3,
  update: ({ maxNoti }) => {
    notificationRef.maxNoti = maxNoti || notificationRef.maxNoti;
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
  closeById: (id) => {
    const notiInstance = notificationRef.instances.get(id);
    if (notiInstance) {
      notiInstance.doClose();
    }
  },
  updateById: (id, param) => {
    const notiInstance = notificationRef.instances.get(id);
    if (notiInstance) {
      notiInstance.setState(param);
    }
  },
};

const useLocalUniqueId = (id) => {
  return id || useUniqueId();
};

const PusherNotification = ({ id, renderFunc, autoClose, initState, onUnmounted, placement, ...otherProps }) => {
  const uniqueId = useLocalUniqueId(id);
  const [state, setState] = useState(initState);
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
        setState,
      });
    }
  }, [uniqueId, isOpen, doClose, setState]);

  useEffect(() => {
    if (!isOpen) {
      notificationRef.instances.delete(uniqueId);
    }
    return () => notificationRef.instances.delete(uniqueId);
  }, []);

  useEffect(() => {
    if (!isOpen && onUnmounted) {
      onUnmounted();
    }
  }, [isOpen, onUnmounted]);

  if (isOpen) {
    return (
      <Portal {...otherProps} node={mapDefaultNode[placement]}>
        {renderFunc({ doClose, state, setState })}
      </Portal>
    );
  }
  return null;
};

PusherNotification.propTypes = {
  initState: PropTypes.object,
  renderFunc: PropTypes.func.isRequired,
  autoClose: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onUnmounted: PropTypes.func,
  placement: PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right'])
};
PusherNotification.defaultProps = {
  autoClose: 9000,
  onUnmounted: f => f,
  initState: {},
  placement: 'bottom-left',
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
