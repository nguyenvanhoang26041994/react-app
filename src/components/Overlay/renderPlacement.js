const topRight = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
    top: targetPosition.pageY - overlayPosition.clientHeight - gap,
  },
});

const rightTop = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX + targetPosition.clientWidth + gap,
    top: targetPosition.pageY,
  },
});

const rightBottom = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX + targetPosition.clientWidth + gap,
    top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight),
  },
});

const bottomRight = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
    top: targetPosition.pageY + targetPosition.clientHeight + gap,
  },
});

const bottomLeft = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX,
    top: targetPosition.pageY + targetPosition.clientHeight + gap,
  },
});

const leftBottom = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX - overlayPosition.clientWidth - gap,
    top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight),
  },
});

const leftTop = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX - overlayPosition.clientWidth - gap,
    top: targetPosition.pageY,
  },
});

const topLeft = (targetPosition, overlayPosition, gap) => ({
  overlayStyle: {
    left: targetPosition.pageX,
    top: targetPosition.pageY - overlayPosition.clientHeight - gap,
  },
});

export default {
  top: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  topRight: topRight,
  'top-right': topRight,
  rightTop: rightTop,
  'right-top': rightTop,
  rightBottom: rightBottom,
  'right-bottom': rightBottom,
  bottomRight: bottomRight,
  'bottom-right': bottomRight,
  bottom: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  bottomLeft: bottomLeft,
  'bottom-left': bottomLeft,
  leftBottom: leftBottom,
  'left-bottom': leftBottom,
  left: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2,
    },
  }),
  leftTop: leftTop,
  'left-top': leftTop,
  topLeft: topLeft,
  'top-left': topLeft,
  right: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2,
    },
  }),
};
