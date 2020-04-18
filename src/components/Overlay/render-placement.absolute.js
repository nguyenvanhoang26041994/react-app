const topRight = (targetPosition, overlayPosition, gap) => ({
  bottom: `calc(100% + ${gap}px)`,
  right: 0,
});

const rightTop = (targetPosition, overlayPosition, gap) => ({
  top: 0,
  left: `calc(100% + ${gap}px)`,
});

const rightBottom = (targetPosition, overlayPosition, gap) => ({
  left: `calc(100% + ${gap}px)`,
  bottom: 0,
});

const bottomRight = (targetPosition, overlayPosition, gap) => ({
  top: `calc(100% + ${gap}px)`,
  right: 0,
});

const bottomLeft = (targetPosition, overlayPosition, gap) => ({
  top: `calc(100% + ${gap}px)`,
  left: 0,
});

const leftBottom = (targetPosition, overlayPosition, gap) => ({
  right: `calc(100% + ${gap}px)`,
  bottom: 0,
});

const leftTop = (targetPosition, overlayPosition, gap) => ({
  right: `calc(100% + ${gap}px)`,
  top: 0,
});

const topLeft = (targetPosition, overlayPosition, gap) => ({
  bottom: `calc(100% + ${gap}px)`,
  left: 0,
});

export default {
  top: (targetPosition, overlayPosition, gap) => ({
    bottom: `calc(100% + ${gap}px)`,
    left: '50%',
    transform: `translateX(-50%)`,
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
    top: `calc(100% + ${gap}px)`,
    left: '50%',
    transform: 'translateX(-50%)',
  }),
  bottomLeft: bottomLeft,
  'bottom-left': bottomLeft,
  leftBottom: leftBottom,
  'left-bottom': leftBottom,
  left: (targetPosition, overlayPosition, gap) => ({
    right: `calc(100% + ${gap}px)`,
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  leftTop: leftTop,
  'left-top': leftTop,
  topLeft: topLeft,
  'top-left': topLeft,
  right: (targetPosition, overlayPosition, gap) => ({
    top: '50%',
    left: `calc(100% + ${gap}px)`,
    transform: 'translateY(-50%)',
  }),
};
