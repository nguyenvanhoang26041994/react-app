const {
  rootPortal,
  leftNode,
  rightNode,
  middleNode,
} = (() => {
  if (typeof window === 'undefined') {
    return null;
  }
  const rootPortal = window.document.createElement('div');
  rootPortal.id = 'root-portal';
  rootPortal.style.position = 'fixed';
  rootPortal.style.top = '0px';
  rootPortal.style.left = '0px';

  const leftNode = window.document.createElement('div');
  leftNode.id = 'root-portal-left';
  leftNode.style.position = 'absolute';
  leftNode.style.height = '100vh';
  leftNode.style.width = '0px';
  leftNode.style.display = 'flex';
  leftNode.style.top = '0px';
  leftNode.style.left = '0px';

  const rightNode = window.document.createElement('div');
  rightNode.id = 'root-portal-right';
  rightNode.style.position = 'absolute';
  rightNode.style.display = 'flex';
  rightNode.style.flexDirection = 'column';

  const middleNode = window.document.createElement('div');
  middleNode.id = 'root-portal-middle';
  middleNode.style.position = 'absolute';
  middleNode.style.display = 'flex';
  middleNode.style.flexDirection = 'column';

  rootPortal.appendChild(leftNode);
  rootPortal.appendChild(rightNode);
  rootPortal.appendChild(middleNode);
  window.document.body.appendChild(rootPortal);

  return {
    rootPortal,
    leftNode,
    rightNode,
    middleNode,
  };
})();

const portalRef = {
  left: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    update: ({ flexDirection, justifyContent }) => {
      portalRef.left.flexDirection = flexDirection || portalRef.left.flexDirection;
      portalRef.left.justifyContent = justifyContent || portalRef.left.justifyContent;
      leftNode.style.flexDirection = portalRef.left.flexDirection;
      leftNode.style.justifyContent = portalRef.left.justifyContent;
    },
  },
  right: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    update: ({ flexDirection, justifyContent }) => {
      portalRef.right.flexDirection = flexDirection || portalRef.right.flexDirection;
      portalRef.right.justifyContent = justifyContent || portalRef.right.justifyContent;
      rightNode.style.flexDirection = portalRef.right.flexDirection;
      rightNode.style.justifyContent = portalRef.left.justifyContent;
    },
  },
  middle: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    update: ({ flexDirection, justifyContent }) => {
      portalRef.middle.flexDirection = flexDirection || portalRef.middle.flexDirection;
      portalRef.middle.justifyContent = justifyContent || portalRef.middle.justifyContent;
      middleNode.style.flexDirection = portalRef.middle.flexDirection;
      middleNode.style.justifyContent = portalRef.middle.justifyContent;
    },
  }
};

(() => {
  if (typeof window === 'undefined') {
    return null;
  }

  portalRef.left.update({});
  portalRef.right.update({});
  portalRef.middle.update({});
})();

export {
  portalRef,
  rootPortal,
  leftNode,
  rightNode,
  middleNode,
};
