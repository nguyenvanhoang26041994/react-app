export default {
  top: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  'top-right': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  'right-top': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY,
    },
  }),
  'right-bottom': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight),
    },
  }),
  'bottom-right': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  bottom: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  'bottom-left': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX,
      top: targetPosition.pageY + targetPosition.clientHeight + gap,
    },
  }),
  'left-bottom': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight),
    },
  }),
  left: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2,
    },
  }),
  'left-top': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY,
    },
  }),
  'top-left': (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX,
      top: targetPosition.pageY - overlayPosition.clientHeight - gap,
    },
  }),
  right: (targetPosition, overlayPosition, gap) => ({
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2,
    },
  }),
};
