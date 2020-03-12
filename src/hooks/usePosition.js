import React, { useEffect, useState, useMemo } from 'react';
import getPosition from '../utils/getPosition';

export default (ref, tracking = []) => {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, seClienttHeight] = useState(0);

  useEffect(() => {
    const position = getPosition(ref.current);
    setPageX(position.pageX);
    setPageY(position.pageY);
    setClientWidth(position.clientWidth);
    seClienttHeight(position.clientHeight);
  }, tracking);

  return useMemo(() => ({
    pageX,
    pageY,
    clientWidth,
    clientHeight,
  }), [pageX, pageY, clientWidth, clientHeight]);
}
