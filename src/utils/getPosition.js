export const getRootPosition = () => {
  const html = document.querySelector('html');

  return {
    scrollTop: html.scrollTop,
    scrollLeft: html.scrollLeft,
    scrollWidth: html.scrollWidth,
    scrollHeight: html.scrollHeight,
  };
};

export default node => {
  let _nextNode = node;
  let pageX = 0;
  let pageY = 0;

  do {
    pageX += _nextNode.offsetLeft - _nextNode.scrollLeft;
    pageY += _nextNode.offsetTop - _nextNode.scrollTop;

    // SUPPORT FIXED POSITION
    if (!_nextNode.offsetParent && _nextNode.localName !== 'body') {
      const htmlNode = getRootPosition();
      pageX+= htmlNode.scrollLeft;
      pageY+= htmlNode.scrollTop;
      break;
    }
    _nextNode = _nextNode.offsetParent;
  } while(_nextNode);

  return {
    pageX,
    pageY,
    clientHeight: node.clientHeight,
    clientWidth: node.clientWidth,
  };
}
