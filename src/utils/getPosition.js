export default node => {
  let _nextNode = node;
  let pageX = 0;
  let pageY = 0;

  do {
    pageX += _nextNode.offsetLeft - _nextNode.scrollLeft;
    pageY += _nextNode.offsetTop - _nextNode.scrollTop;
    _nextNode = _nextNode.offsetParent;
  } while(_nextNode && _nextNode.offsetParent)

  return { pageX, pageY, clientHeight: node.clientHeight, clientWidth: node.clientWidth };
}
